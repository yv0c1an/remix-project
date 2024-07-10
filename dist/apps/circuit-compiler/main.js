(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ 53373:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.generateR1cs = exports.computeWitness = exports.compileCircuit = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(59454));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(91544));
var compileCircuit = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(plugin, appState) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!(appState.status !== "compiling")) {
              _context.next = 6;
              break;
            }
            _context.next = 4;
            return plugin.compile(appState.filePath, {
              version: appState.version,
              prime: appState.primeValue
            });
          case 4:
            _context.next = 7;
            break;
          case 6:
            console.log('Existing circuit compilation in progress');
          case 7:
            _context.next = 13;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            plugin.internalEvents.emit('circuit_compiling_errored', _context.t0);
            console.error(_context.t0);
          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function compileCircuit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.compileCircuit = compileCircuit;
var generateR1cs = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(plugin, appState) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (!(appState.status !== "generating")) {
              _context2.next = 6;
              break;
            }
            _context2.next = 4;
            return plugin.generateR1cs(appState.filePath, {
              version: appState.version,
              prime: appState.primeValue
            });
          case 4:
            _context2.next = 7;
            break;
          case 6:
            console.log('Existing r1cs generation in progress');
          case 7:
            _context2.next = 13;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            plugin.internalEvents.emit('circuit_generating_r1cs_errored', _context2.t0);
            console.error('Generating R1CS failed: ', _context2.t0);
          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function generateR1cs(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.generateR1cs = generateR1cs;
var computeWitness = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(plugin, status, witnessValues) {
    var input;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            if (!(status !== "computing")) {
              _context3.next = 7;
              break;
            }
            input = JSON.stringify(witnessValues);
            _context3.next = 5;
            return plugin.computeWitness(input);
          case 5:
            _context3.next = 8;
            break;
          case 7:
            console.log('Existing witness computation in progress');
          case 8:
            _context3.next = 14;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            plugin.internalEvents.emit('circuit_computing_witness_errored', _context3.t0);
            console.error('Computing witness failed: ', _context3.t0);
          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function computeWitness(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();
exports.computeWitness = computeWitness;

/***/ }),

/***/ 957:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
var _typeof = __webpack_require__(22886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(59454));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(91544));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15159));
var _react = _interopRequireWildcard(__webpack_require__(47182));
var _helper = __webpack_require__(63878);
var _reactIntl = __webpack_require__(24831);
var _container = __webpack_require__(70360);
var _contexts = __webpack_require__(42768);
var _state = __webpack_require__(79840);
var _circomPluginClient = __webpack_require__(18646);
var _actions = __webpack_require__(53373);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/circuit-compiler/src/app/app.tsx";
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var plugin = new _circomPluginClient.CircomPluginClient();
function App() {
  var _useReducer = (0, _react.useReducer)(_state.appReducer, _state.appInitialState),
    _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
    appState = _useReducer2[0],
    dispatch = _useReducer2[1];
  var _useState = (0, _react.useState)({
      code: 'en',
      messages: null
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    locale = _useState2[0],
    setLocale = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isContentChanged = _useState4[0],
    setIsContentChanged = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    isPluginActivated = _useState6[0],
    setIsPluginActivated = _useState6[1];
  (0, _react.useEffect)(function () {
    plugin.internalEvents.on('circom_activated', function () {
      // @ts-ignore
      plugin.on('locale', 'localeChanged', function (locale) {
        setLocale(locale);
      });
      plugin.on('fileManager', 'currentFileChanged', function (filePath) {
        if (filePath.endsWith('.circom')) {
          dispatch({
            type: 'SET_FILE_PATH',
            payload: filePath
          });
          plugin.parse(filePath);
        }
      });
      // @ts-ignore
      plugin.on('editor', 'contentChanged', /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(path, content) {
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  setIsContentChanged(true);
                  if (path.endsWith('.circom')) {
                    plugin.parse(path, content);
                  }
                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
      setIsPluginActivated(true);
    });

    // compiling events
    plugin.internalEvents.on('circuit_compiling_start', function () {
      return dispatch({
        type: 'SET_COMPILER_STATUS',
        payload: 'compiling'
      });
    });
    plugin.internalEvents.on('circuit_compiling_done', function (signalInputs) {
      signalInputs = (signalInputs || []).filter(function (input) {
        return input;
      });
      dispatch({
        type: 'SET_SIGNAL_INPUTS',
        payload: signalInputs
      });
      dispatch({
        type: 'SET_COMPILER_STATUS',
        payload: 'idle'
      });
    });
    plugin.internalEvents.on('circuit_compiling_errored', compilerErrored);

    // r1cs events
    plugin.internalEvents.on('circuit_generating_r1cs_start', function () {
      return dispatch({
        type: 'SET_COMPILER_STATUS',
        payload: 'generating'
      });
    });
    plugin.internalEvents.on('circuit_generating_r1cs_done', function () {
      return dispatch({
        type: 'SET_COMPILER_STATUS',
        payload: 'idle'
      });
    });
    plugin.internalEvents.on('circuit_generating_r1cs_errored', compilerErrored);

    // witness events
    plugin.internalEvents.on('circuit_computing_witness_start', function () {
      return dispatch({
        type: 'SET_COMPILER_STATUS',
        payload: 'computing'
      });
    });
    plugin.internalEvents.on('circuit_computing_witness_done', function () {
      dispatch({
        type: 'SET_COMPILER_STATUS',
        payload: 'idle'
      });
      dispatch({
        type: 'SET_COMPILER_FEEDBACK',
        payload: null
      });
    });
    plugin.internalEvents.on('circuit_computing_witness_errored', compilerErrored);

    // parsing events
    plugin.internalEvents.on('circuit_parsing_done', function (_, filePathToId) {
      dispatch({
        type: 'SET_FILE_PATH_TO_ID',
        payload: filePathToId
      });
      dispatch({
        type: 'SET_COMPILER_FEEDBACK',
        payload: null
      });
    });
    plugin.internalEvents.on('circuit_parsing_errored', function (report, filePathToId) {
      dispatch({
        type: 'SET_FILE_PATH_TO_ID',
        payload: filePathToId
      });
      dispatch({
        type: 'SET_COMPILER_STATUS',
        payload: 'errored'
      });
      dispatch({
        type: 'SET_COMPILER_FEEDBACK',
        payload: report
      });
    });
    plugin.internalEvents.on('circuit_parsing_warning', function (report, filePathToId) {
      dispatch({
        type: 'SET_FILE_PATH_TO_ID',
        payload: filePathToId
      });
      dispatch({
        type: 'SET_COMPILER_STATUS',
        payload: 'warning'
      });
      dispatch({
        type: 'SET_COMPILER_FEEDBACK',
        payload: report
      });
    });
  }, []);
  (0, _react.useEffect)(function () {
    if (isContentChanged) {
      (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!appState.autoCompile) {
                  _context2.next = 3;
                  break;
                }
                _context2.next = 3;
                return (0, _actions.compileCircuit)(plugin, appState);
              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
      setIsContentChanged(false);
    }
  }, [appState.autoCompile, isContentChanged]);
  (0, _react.useEffect)(function () {
    if (isPluginActivated) {
      setCurrentLocale();
    }
  }, [isPluginActivated]);
  (0, _react.useEffect)(function () {
    if (appState.filePath) {
      (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!appState.autoCompile) {
                  _context3.next = 3;
                  break;
                }
                _context3.next = 3;
                return (0, _actions.compileCircuit)(plugin, appState);
              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
      dispatch({
        type: 'SET_SIGNAL_INPUTS',
        payload: []
      });
      dispatch({
        type: 'SET_COMPILER_STATUS',
        payload: 'idle'
      });
      dispatch({
        type: 'SET_COMPILER_FEEDBACK',
        payload: null
      });
    }
  }, [appState.filePath]);
  var setCurrentLocale = /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      var currentLocale;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return plugin.call('locale', 'currentLocale');
            case 2:
              currentLocale = _context4.sent;
              setLocale(currentLocale);
            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return function setCurrentLocale() {
      return _ref4.apply(this, arguments);
    };
  }();
  var compilerErrored = function compilerErrored(err) {
    dispatch({
      type: 'SET_COMPILER_STATUS',
      payload: 'errored'
    });
    try {
      var report = JSON.parse(err.message);
      dispatch({
        type: 'SET_COMPILER_FEEDBACK',
        payload: report
      });
    } catch (e) {
      dispatch({
        type: 'SET_COMPILER_FEEDBACK',
        payload: err.message
      });
    }
  };
  var value = {
    appState: appState,
    dispatch: dispatch,
    plugin: plugin
  };
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    className: "circuit_compiler_app",
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
      condition: locale.messages,
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactIntl.IntlProvider, {
        locale: locale.code,
        messages: locale.messages,
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_contexts.CircuitAppContext.Provider, {
          value: value,
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_container.Container, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 5
  }, this);
}
var _default = App;
exports["default"] = _default;

/***/ }),

/***/ 91934:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CircuitActions = CircuitActions;
var _compileBtn = __webpack_require__(94528);
var _r1csBtn = __webpack_require__(36115);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/circuit-compiler/src/app/components/actions.tsx";
function CircuitActions() {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    className: "pb-3",
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_compileBtn.CompileBtn, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_r1csBtn.R1CSBtn, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 94528:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CompileBtn = CompileBtn;
var _helper = __webpack_require__(63878);
var _react = __webpack_require__(47182);
var _contexts = __webpack_require__(42768);
var _reactIntl = __webpack_require__(24831);
var _actions = __webpack_require__(53373);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/circuit-compiler/src/app/components/compileBtn.tsx";
function CompileBtn() {
  var _useContext = (0, _react.useContext)(_contexts.CircuitAppContext),
    plugin = _useContext.plugin,
    appState = _useContext.appState;
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.CustomTooltip, {
    placement: "auto",
    tooltipId: "overlay-tooltip-compile",
    tooltipText: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "text-left",
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("b", {
          children: "Ctrl+S"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, this), " to compile ", appState.filePath]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this),
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
      className: "btn btn-primary btn-block d-block w-100 text-break mb-1 mt-3",
      onClick: function onClick() {
        (0, _actions.compileCircuit)(plugin, appState);
      },
      disabled: appState.filePath === "" || appState.status === "compiling" || appState.status === "generating",
      "data-id": "compile_circuit_btn",
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "d-flex align-items-center justify-content-center",
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
          condition: appState.status === 'compiling',
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
            className: "fas fa-sync fa-spin mr-2",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIfNot, {
          condition: appState.status === 'compiling',
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
            className: "fas fa-sync mr-2",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          className: "text-truncate overflow-hidden text-nowrap",
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactIntl.FormattedMessage, {
              id: "circuit.compile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
            className: "ml-1 text-nowrap",
            children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
              condition: appState.filePath === "",
              children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactIntl.FormattedMessage, {
                id: "circuit.noFileSelected"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIfNot, {
              condition: appState.filePath === "",
              children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
                children: (0, _helper.extractNameFromKey)(appState.filePath)
              }, void 0, false)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 83336:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ConfigToggler = ConfigToggler;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15159));
var _react = __webpack_require__(47182);
var _reactIntl = __webpack_require__(24831);
var _helper = __webpack_require__(63878);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/circuit-compiler/src/app/components/configToggler.tsx";
function ConfigToggler(_ref) {
  var children = _ref.children;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    toggleExpander = _useState2[0],
    setToggleExpander = _useState2[1];
  var toggleConfigurations = function toggleConfigurations() {
    setToggleExpander(!toggleExpander);
  };
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "d-flex circuit_config_section justify-content-between",
      onClick: toggleConfigurations,
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "d-flex",
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("label", {
          className: "mt-1 circuit_config_section",
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactIntl.FormattedMessage, {
            id: "circuit.advancedConfigurations"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
          "data-id": "scConfigExpander",
          onClick: toggleConfigurations,
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
            condition: toggleExpander,
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
              className: "fas fa-angle-down",
              "aria-hidden": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIfNot, {
            condition: toggleExpander,
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
              className: "fas fa-angle-right",
              "aria-hidden": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
      condition: toggleExpander,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 57063:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Configurations = Configurations;
var _helper = __webpack_require__(63878);
var _reactIntl = __webpack_require__(24831);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/circuit-compiler/src/app/components/configurations.tsx";
function Configurations(_ref) {
  var primeValue = _ref.primeValue,
    setPrimeValue = _ref.setPrimeValue,
    versionValue = _ref.versionValue;
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    className: "pb-2 border-bottom flex-column",
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "flex-column d-flex",
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "mb-2 ml-0",
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("label", {
          className: "circuit_inner_label form-check-label",
          htmlFor: "circuitPrimeSelector",
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactIntl.FormattedMessage, {
            id: "circuit.prime"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.CustomTooltip, {
          placement: "auto",
          tooltipId: "circuitPrimeLabelTooltip",
          tooltipClasses: "text-nowrap",
          tooltipText: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
            children: 'To choose the prime number to use to generate the circuit. Receives the name of the curve (bn128, bls12381, goldilocks, grumpkin, pallas, vesta)'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 26
          }, this),
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("select", {
              onChange: function onChange(e) {
                return setPrimeValue(e.target.value);
              },
              value: primeValue,
              className: "custom-select",
              style: {
                pointerEvents: 'auto'
              },
              children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
                condition: versionValue === '2.1.5',
                children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
                  children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "bn128",
                    children: "bn128"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "bls12381",
                    children: "bls12381"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "goldilocks",
                    children: "goldilocks"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 21
                  }, this)]
                }, void 0, true)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
                condition: versionValue === '2.1.6',
                children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
                  children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "bn128",
                    children: "bn128"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "bls12381",
                    children: "bls12381"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "goldilocks",
                    children: "goldilocks"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 39,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "grumpkin",
                    children: "grumpkin"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "pallas",
                    children: "pallas"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "vesta",
                    children: "vesta"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 21
                  }, this)]
                }, void 0, true)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
                condition: versionValue === '2.1.7',
                children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
                  children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "bn128",
                    children: "bn128"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "bls12381",
                    children: "bls12381"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "goldilocks",
                    children: "goldilocks"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "grumpkin",
                    children: "grumpkin"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "pallas",
                    children: "pallas"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "vesta",
                    children: "vesta"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 21
                  }, this)]
                }, void 0, true)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
                condition: versionValue === '2.1.8',
                children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
                  children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "bn128",
                    children: "bn128"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "bls12381",
                    children: "bls12381"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "goldilocks",
                    children: "goldilocks"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "grumpkin",
                    children: "grumpkin"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "pallas",
                    children: "pallas"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "vesta",
                    children: "vesta"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
                    value: "secq256r1",
                    children: "secq256r1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, this)]
                }, void 0, true)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 70360:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Container = Container;
var _regenerator = _interopRequireDefault(__webpack_require__(59454));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(91544));
var _react = __webpack_require__(47182);
var _helper = __webpack_require__(63878);
var _reactIntl = __webpack_require__(24831);
var _contexts = __webpack_require__(42768);
var _options = __webpack_require__(97040);
var _versions = __webpack_require__(37467);
var _configToggler = __webpack_require__(83336);
var _configurations = __webpack_require__(57063);
var _actions = __webpack_require__(91934);
var _witnessToggler = __webpack_require__(43503);
var _witness = __webpack_require__(4590);
var _feedback = __webpack_require__(39692);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/circuit-compiler/src/app/components/container.tsx";
function Container() {
  var circuitApp = (0, _react.useContext)(_contexts.CircuitAppContext);
  var showCompilerLicense = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var message,
        response,
        content,
        _args = arguments;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              message = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'License not available';
              _context.prev = 1;
              _context.next = 4;
              return fetch('https://raw.githubusercontent.com/iden3/circom/master/COPYING');
            case 4:
              response = _context.sent;
              if (response.ok) {
                _context.next = 7;
                break;
              }
              throw new Error("HTTP error! status: ".concat(response.status));
            case 7:
              _context.next = 9;
              return response.text();
            case 9:
              content = _context.sent;
              // @ts-ignore
              circuitApp.plugin.call('notification', 'modal', {
                id: 'modal_circuit_compiler_license',
                title: 'Compiler License',
                message: content
              });
              _context.next = 16;
              break;
            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              // @ts-ignore
              circuitApp.plugin.call('notification', 'modal', {
                id: 'modal_circuit_compiler_license',
                title: 'Compiler License',
                message: message
              });
            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 13]]);
    }));
    return function showCompilerLicense() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleVersionSelect = function handleVersionSelect(version) {
    circuitApp.plugin.compilerVersion = version;
    circuitApp.dispatch({
      type: 'SET_COMPILER_VERSION',
      payload: version
    });
  };
  var handleOpenErrorLocation = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(location, startRange) {
      var fullPathLocation, startPosition;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!location) {
                _context2.next = 11;
                break;
              }
              _context2.next = 3;
              return circuitApp.plugin.resolveReportPath(location);
            case 3:
              fullPathLocation = _context2.sent;
              _context2.next = 6;
              return circuitApp.plugin.call('fileManager', 'open', fullPathLocation);
            case 6:
              _context2.next = 8;
              return circuitApp.plugin.call('editor', 'getPositionAt', startRange);
            case 8:
              startPosition = _context2.sent;
              _context2.next = 11;
              return circuitApp.plugin.call('editor', 'gotoLine', startPosition.lineNumber - 1, startPosition.column);
            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function handleOpenErrorLocation(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handlePrimeChange = function handlePrimeChange(value) {
    circuitApp.plugin.compilerPrime = value;
    circuitApp.dispatch({
      type: 'SET_PRIME_VALUE',
      payload: value
    });
  };
  var handleCircuitAutoCompile = function handleCircuitAutoCompile(value) {
    circuitApp.dispatch({
      type: 'SET_AUTO_COMPILE',
      payload: value
    });
  };
  var handleCircuitHideWarnings = function handleCircuitHideWarnings(value) {
    circuitApp.dispatch({
      type: 'SET_HIDE_WARNINGS',
      payload: value
    });
  };
  var askGPT = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(report) {
      var location, error, fullPathLocation, content, message, _message, _error, _message2;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(report.labels.length > 0)) {
                _context3.next = 20;
                break;
              }
              location = circuitApp.appState.filePathToId[report.labels[0].file_id];
              error = report.labels[0].message;
              if (!location) {
                _context3.next = 15;
                break;
              }
              _context3.next = 6;
              return circuitApp.plugin.resolveReportPath(location);
            case 6:
              fullPathLocation = _context3.sent;
              _context3.next = 9;
              return circuitApp.plugin.call('fileManager', 'readFile', fullPathLocation);
            case 9:
              content = _context3.sent;
              message = "\n          circom code: ".concat(content, "\n          error message: ").concat(error, "\n          full circom error: ").concat(JSON.stringify(report, null, 2), "\n          explain why the error occurred and how to fix it.\n          "); // @ts-ignore
              _context3.next = 13;
              return circuitApp.plugin.call('solcoder', 'error_explaining', message);
            case 13:
              _context3.next = 18;
              break;
            case 15:
              _message = "\n          error message: ".concat(error, "\n          full circom error: ").concat(JSON.stringify(report, null, 2), "\n          explain why the error occurred and how to fix it.\n          "); // @ts-ignore
              _context3.next = 18;
              return circuitApp.plugin.call('solcoder', 'error_explaining', _message);
            case 18:
              _context3.next = 24;
              break;
            case 20:
              _error = report.message;
              _message2 = "\n      error message: ".concat(_error, "\n      full circom error: ").concat(JSON.stringify(report, null, 2), "\n      explain why the error occurred and how to fix it.\n      "); // @ts-ignore
              _context3.next = 24;
              return circuitApp.plugin.call('solcoder', 'error_explaining', _message2);
            case 24:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return function askGPT(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("section", {
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("article", {
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "pt-0 circuit_section",
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          className: "mb-1",
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("label", {
            className: "circuit_label form-check-label",
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactIntl.FormattedMessage, {
              id: "circuit.compiler"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.CustomTooltip, {
            placement: "bottom",
            tooltipId: "showCircumCompilerTooltip",
            tooltipClasses: "text-nowrap",
            tooltipText: "See compiler license",
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
              className: "far fa-file-certificate border-0 p-0 ml-2",
              onClick: function onClick() {
                return showCompilerLicense();
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_versions.VersionList, {
            setVersion: handleVersionSelect,
            versionList: circuitApp.appState.versionList,
            currentVersion: circuitApp.appState.version
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_options.CompileOptions, {
            setCircuitAutoCompile: handleCircuitAutoCompile,
            setCircuitHideWarnings: handleCircuitHideWarnings,
            autoCompile: circuitApp.appState.autoCompile,
            hideWarnings: circuitApp.appState.hideWarnings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_configToggler.ConfigToggler, {
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_configurations.Configurations, {
              setPrimeValue: handlePrimeChange,
              primeValue: circuitApp.appState.primeValue,
              versionValue: circuitApp.appState.version
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_actions.CircuitActions, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
            condition: circuitApp.appState.signalInputs.length > 0,
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_witnessToggler.WitnessToggler, {
              children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_witness.WitnessSection, {
                plugin: circuitApp.plugin,
                signalInputs: circuitApp.appState.signalInputs,
                status: circuitApp.appState.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
            condition: circuitApp.appState.status !== 'compiling' && circuitApp.appState.status !== 'computing' && circuitApp.appState.status !== 'generating',
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_feedback.CompilerFeedback, {
              feedback: circuitApp.appState.feedback,
              filePathToId: circuitApp.appState.filePathToId,
              openErrorLocation: handleOpenErrorLocation,
              hideWarnings: circuitApp.appState.hideWarnings,
              askGPT: askGPT
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 39692:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CompilerFeedback = CompilerFeedback;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15159));
var _react = __webpack_require__(47182);
var _helper = __webpack_require__(63878);
var _clipboard = __webpack_require__(29539);
var _feedbackAlert = __webpack_require__(97112);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/circuit-compiler/src/app/components/feedback.tsx";
function CompilerFeedback(_ref) {
  var _this = this;
  var feedback = _ref.feedback,
    filePathToId = _ref.filePathToId,
    hideWarnings = _ref.hideWarnings,
    openErrorLocation = _ref.openErrorLocation,
    askGPT = _ref.askGPT;
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    showException = _useState2[0],
    setShowException = _useState2[1];
  var handleCloseException = function handleCloseException() {
    setShowException(false);
  };
  var handleOpenError = function handleOpenError(report) {
    if (report.labels.length > 0) {
      openErrorLocation(filePathToId[report.labels[0].file_id], report.labels[0].range.start);
    }
  };
  var handleAskGPT = function handleAskGPT(report) {
    askGPT(report);
  };
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "circuit_errors_box py-4",
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
        condition: typeof feedback === "string" && showException,
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          className: "circuit_feedback error alert alert-danger",
          "data-id": "circuit_feedback",
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
            children: [" ", /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
              children: feedback
            }, void 0, false), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
            className: "close",
            "data-id": "renderer",
            onClick: handleCloseException,
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
              className: "fas fa-times"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
            className: "d-flex pt-1 flex-row-reverse",
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
              className: "ml-3 pt-1 py-1",
              children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_clipboard.CopyToClipboard, {
                content: feedback,
                className: "p-0 m-0 far fa-copy error",
                direction: 'top'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
        condition: Array.isArray(feedback),
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
          children: Array.isArray(feedback) && feedback.map(function (response, index) {
            return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
              onClick: function onClick() {
                return handleOpenError(response);
              },
              children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
                condition: response.type === 'Error',
                children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                  className: "circuit_feedback ".concat(response.type.toLowerCase(), " alert alert-danger"),
                  "data-id": "circuit_feedback",
                  children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_feedbackAlert.FeedbackAlert, {
                    message: response.message + (response.labels[0] ? ": " + response.labels[0].message + " ".concat(filePathToId[response.labels[0].file_id], ":").concat(response.labels[0].range.start, ":").concat(response.labels[0].range.end) : ''),
                    askGPT: function askGPT() {
                      return handleAskGPT(response);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
                condition: response.type === 'Warning' && !hideWarnings,
                children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                  className: "circuit_feedback ".concat(response.type.toLowerCase(), " alert alert-warning"),
                  "data-id": "circuit_feedback",
                  children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_feedbackAlert.FeedbackAlert, {
                    message: response.message,
                    askGPT: function askGPT() {
                      handleAskGPT(response);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 19
              }, _this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 97112:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FeedbackAlert = FeedbackAlert;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15159));
var _react = __webpack_require__(47182);
var _helper = __webpack_require__(63878);
var _clipboard = __webpack_require__(29539);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/circuit-compiler/src/app/components/feedbackAlert.tsx";
function FeedbackAlert(_ref) {
  var message = _ref.message,
    askGPT = _ref.askGPT;
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    showAlert = _useState2[0],
    setShowAlert = _useState2[1];
  var handleCloseAlert = function handleCloseAlert() {
    setShowAlert(false);
  };
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
    condition: showAlert,
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
        children: [" ", message, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "close",
        "data-id": "renderer",
        onClick: handleCloseAlert,
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
          className: "fas fa-times"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "d-flex pt-1 flex-row-reverse",
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
          className: "ml-3 pt-1 py-1",
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_clipboard.CopyToClipboard, {
            content: message,
            className: "p-0 m-0 far fa-copy error",
            direction: 'top'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
          className: "border border-success text-success btn-sm",
          onClick: function onClick(e) {
            e.stopPropagation();
            askGPT();
          },
          children: "Ask RemixAI"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 97040:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CompileOptions = CompileOptions;
var _reactIntl = __webpack_require__(24831);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/circuit-compiler/src/app/components/options.tsx";
function CompileOptions(_ref) {
  var autoCompile = _ref.autoCompile,
    hideWarnings = _ref.hideWarnings,
    setCircuitAutoCompile = _ref.setCircuitAutoCompile,
    setCircuitHideWarnings = _ref.setCircuitHideWarnings;
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    className: "pb-2",
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "mt-2 custom-control custom-checkbox",
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("input", {
        className: "custom-control-input",
        type: "checkbox",
        onChange: function onChange(e) {
          return setCircuitAutoCompile(e.target.checked);
        },
        title: "Auto compile",
        checked: autoCompile,
        id: "autoCompileCircuit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("label", {
        className: "form-check-label custom-control-label",
        htmlFor: "autoCompileCircuit",
        "data-id": "auto_compile_circuit_checkbox_input",
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactIntl.FormattedMessage, {
          id: "circuit.autoCompile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "mt-1 mb-2 circuit_warnings_box custom-control custom-checkbox",
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("input", {
        className: "custom-control-input",
        onChange: function onChange(e) {
          return setCircuitHideWarnings(e.target.checked);
        },
        id: "hideCircuitWarnings",
        type: "checkbox",
        title: "Hide warnings",
        checked: hideWarnings
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("label", {
        className: "form-check-label custom-control-label",
        htmlFor: "hideCircuitWarnings",
        "data-id": "hide_circuit_warnings_checkbox_input",
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactIntl.FormattedMessage, {
          id: "solidity.hideWarnings"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 36115:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.R1CSBtn = R1CSBtn;
var _helper = __webpack_require__(63878);
var _react = __webpack_require__(47182);
var _contexts = __webpack_require__(42768);
var _reactIntl = __webpack_require__(24831);
var _actions = __webpack_require__(53373);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/circuit-compiler/src/app/components/r1csBtn.tsx";
function R1CSBtn() {
  var _useContext = (0, _react.useContext)(_contexts.CircuitAppContext),
    plugin = _useContext.plugin,
    appState = _useContext.appState;
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
    className: "btn btn-secondary btn-block d-block w-100 text-break mb-1 mt-2",
    onClick: function onClick() {
      (0, _actions.generateR1cs)(plugin, appState);
    },
    disabled: appState.filePath === "" || appState.status === "compiling" || appState.status === "generating" || appState.status === "computing",
    "data-id": "generate_r1cs_btn",
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.CustomTooltip, {
      placement: "auto",
      tooltipId: "overlay-tooltip-compile",
      tooltipText: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "text-left",
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          children: "Outputs the constraints in r1cs format"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this),
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "d-flex align-items-center justify-content-center",
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
          condition: appState.status === 'generating',
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
            className: "fas fa-sync fa-spin mr-2",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIfNot, {
          condition: appState.status === 'generating',
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
            className: "fas fa-sync mr-2",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          className: "text-truncate overflow-hidden text-nowrap",
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactIntl.FormattedMessage, {
              id: "circuit.generateR1cs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 37467:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.VersionList = VersionList;
var _helper = __webpack_require__(63878);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/circuit-compiler/src/app/components/versions.tsx";
function VersionList(_ref) {
  var _this = this;
  var currentVersion = _ref.currentVersion,
    versionList = _ref.versionList,
    setVersion = _ref.setVersion;
  var versionListKeys = Object.keys(versionList);
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("select", {
    value: currentVersion,
    onChange: function onChange(e) {
      return setVersion(e.target.value);
    },
    className: "custom-select",
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
      condition: versionListKeys.length > 0,
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
        children: versionListKeys.map(function (version, index) {
          return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("option", {
            value: version,
            children: versionList[version].name
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 4590:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
var _typeof = __webpack_require__(22886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WitnessSection = WitnessSection;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15159));
var _helper = __webpack_require__(63878);
var _reactIntl = __webpack_require__(24831);
var _actions = __webpack_require__(53373);
var _react = __webpack_require__(47182);
var remixLib = _interopRequireWildcard(__webpack_require__(37559));
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/circuit-compiler/src/app/components/witness.tsx";
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function WitnessSection(_ref) {
  var _this = this;
  var plugin = _ref.plugin,
    signalInputs = _ref.signalInputs,
    status = _ref.status;
  var _useState = (0, _react.useState)({}),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    witnessValues = _useState2[0],
    setWitnessValues = _useState2[1];
  var handleSignalInput = function handleSignalInput(e) {
    var value = e.target.value;
    if (value.startsWith('[') && value.endsWith(']')) {
      try {
        value = remixLib.execution.txFormat.parseFunctionParams(value);
      } catch (e) {
        // do nothing
      }
    } else if (value.startsWith('[') && !value.endsWith(']')) {
      // do nothing
    } else {
      try {
        value = remixLib.execution.txFormat.parseFunctionParams(value);
      } catch (e) {
        // do nothing
      }
    }
    setWitnessValues(Object.assign({}, witnessValues, (0, _defineProperty2["default"])({}, e.target.name, value[0])));
  };
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    className: "pb-2 border-bottom flex-column",
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "flex-column d-flex",
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
        condition: signalInputs.length > 0,
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
          children: [signalInputs.map(function (input, index) {
            return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
              className: "mb-2 ml-0",
              children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("label", {
                className: "circuit_inner_label form-check-label",
                htmlFor: "circuitPrimeSelector",
                children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactIntl.FormattedMessage, {
                  id: "circuit.signalInput"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 21
                }, _this), " ", input]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("input", {
                className: "form-control m-0 txinput",
                placeholder: input,
                name: input,
                onChange: handleSignalInput,
                "data-id": "circuit_input_".concat(input)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 19
              }, _this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, _this);
          }), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
            className: "btn btn-sm btn-secondary",
            onClick: function onClick() {
              (0, _actions.computeWitness)(plugin, status, witnessValues);
            },
            disabled: status === "compiling" || status === "generating" || status === "computing",
            "data-id": "compute_witness_btn",
            children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
              condition: status === 'computing',
              children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
                className: "fas fa-sync fa-spin mr-2",
                "aria-hidden": "true"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIfNot, {
              condition: status === 'computing',
              children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
                className: "fas fa-sync mr-2",
                "aria-hidden": "true"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactIntl.FormattedMessage, {
              id: "circuit.compute"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 43503:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WitnessToggler = WitnessToggler;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15159));
var _react = __webpack_require__(47182);
var _reactIntl = __webpack_require__(24831);
var _helper = __webpack_require__(63878);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/circuit-compiler/src/app/components/witnessToggler.tsx";
function WitnessToggler(_ref) {
  var children = _ref.children;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    toggleExpander = _useState2[0],
    setToggleExpander = _useState2[1];
  var toggleConfigurations = function toggleConfigurations() {
    setToggleExpander(!toggleExpander);
  };
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "d-flex circuit_config_section justify-content-between",
      onClick: toggleConfigurations,
      "data-id": "witness_toggler",
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "d-flex",
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("label", {
          className: "mt-1 circuit_config_section",
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactIntl.FormattedMessage, {
            id: "circuit.computeWitness"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
          "data-id": "scConfigExpander",
          onClick: toggleConfigurations,
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
            condition: toggleExpander,
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
              className: "fas fa-angle-down",
              "aria-hidden": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIfNot, {
            condition: toggleExpander,
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
              className: "fas fa-angle-right",
              "aria-hidden": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.RenderIf, {
      condition: toggleExpander,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 42768:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CircuitAppContext = void 0;
var _react = __webpack_require__(47182);
var CircuitAppContext = /*#__PURE__*/(0, _react.createContext)({});
exports.CircuitAppContext = CircuitAppContext;

/***/ }),

/***/ 79840:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.appReducer = exports.appInitialState = void 0;
var _circom_wasm = __webpack_require__(52326);
var appInitialState = {
  version: _circom_wasm.compiler_list.latest,
  versionList: _circom_wasm.compiler_list.wasm_builds,
  filePath: "",
  filePathToId: {},
  status: "idle",
  primeValue: "bn128",
  autoCompile: false,
  hideWarnings: false,
  signalInputs: [],
  feedback: null
};
exports.appInitialState = appInitialState;
var appReducer = function appReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : appInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case 'SET_COMPILER_VERSION':
      return Object.assign({}, state, {
        version: action.payload
      });
    case 'SET_FILE_PATH':
      return Object.assign({}, state, {
        filePath: action.payload
      });
    case 'SET_COMPILER_STATUS':
      return Object.assign({}, state, {
        status: action.payload
      });
    case 'SET_PRIME_VALUE':
      return Object.assign({}, state, {
        primeValue: action.payload
      });
    case 'SET_AUTO_COMPILE':
      return Object.assign({}, state, {
        autoCompile: action.payload
      });
    case 'SET_HIDE_WARNINGS':
      return Object.assign({}, state, {
        hideWarnings: action.payload
      });
    case 'SET_SIGNAL_INPUTS':
      return Object.assign({}, state, {
        signalInputs: action.payload
      });
    case 'SET_COMPILER_FEEDBACK':
      return Object.assign({}, state, {
        feedback: action.payload
      });
    case 'SET_FILE_PATH_TO_ID':
      return Object.assign({}, state, {
        filePathToId: action.payload
      });
    default:
      throw new Error();
  }
};
exports.appReducer = appReducer;

/***/ }),

/***/ 18646:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
var _typeof = __webpack_require__(22886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CircomPluginClient = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(59454));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15159));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(91544));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(32830));
var _createClass2 = _interopRequireDefault(__webpack_require__(59152));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(69451));
var _inherits2 = _interopRequireDefault(__webpack_require__(9346));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(27933));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(83910));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var _plugin = __webpack_require__(80481);
var _pluginWebview = __webpack_require__(98522);
var _events = _interopRequireDefault(__webpack_require__(63683));
var _path = _interopRequireDefault(__webpack_require__(96442));
var _circom_wasm = __webpack_require__(52326);
var compilerV218 = _interopRequireWildcard(__webpack_require__(27308));
var compilerV217 = _interopRequireWildcard(__webpack_require__(93006));
var compilerV216 = _interopRequireWildcard(__webpack_require__(3399));
var compilerV215 = _interopRequireWildcard(__webpack_require__(69956));
var _helper = __webpack_require__(63878);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
// @ts-ignore
var _paq = window._paq = window._paq || [];
var CircomPluginClient = /*#__PURE__*/function (_PluginClient) {
  (0, _inherits2["default"])(CircomPluginClient, _PluginClient);
  var _super = _createSuper(CircomPluginClient);
  function CircomPluginClient() {
    var _this;
    (0, _classCallCheck2["default"])(this, CircomPluginClient);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "internalEvents", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_compilationConfig", {
      version: "2.1.8",
      prime: "bn128"
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "lastCompiledCircuitPath", '');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "lastParsedFiles", {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "lastCompiledFile", '');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "compiler", void 0);
    _this.methods = ['init', 'parse', 'compile', 'generateR1cs', 'resolveDependencies'];
    (0, _pluginWebview.createClient)((0, _assertThisInitialized2["default"])(_this));
    _this.internalEvents = new _events["default"]();
    _this.onload();
    return _this;
  }
  (0, _createClass2["default"])(CircomPluginClient, [{
    key: "init",
    value: function init() {
      console.log('initializing circom plugin...');
    }
  }, {
    key: "onActivation",
    value: function onActivation() {
      this.internalEvents.emit('circom_activated');
    }
  }, {
    key: "compilerVersion",
    set: function set(version) {
      if (!_circom_wasm.compiler_list.versions.includes(version)) throw new Error("Unsupported compiler version");
      this._compilationConfig.version = version;
      if (version === '2.1.5') this.compiler = compilerV215;else if (version === '2.1.6') this.compiler = compilerV216;else if (version === '2.1.7') this.compiler = compilerV217;else if (version === '2.1.8') this.compiler = compilerV218;else this.compiler = null;
    }
  }, {
    key: "compilerPrime",
    set: function set(prime) {
      if (prime !== "bn128" && prime !== "bls12381" && prime !== "goldilocks" && this._compilationConfig.version === '2.1.5') throw new Error('Invalid prime value');
      if (prime !== "bn128" && prime !== "bls12381" && prime !== "goldilocks" && prime !== "grumpkin" && prime !== "pallas" && prime !== "vesta" && this._compilationConfig.version === '2.1.6') throw new Error('Invalid prime value');
      if (prime !== "bn128" && prime !== "bls12381" && prime !== "goldilocks" && prime !== "grumpkin" && prime !== "pallas" && prime !== "vesta" && this._compilationConfig.version === '2.1.7') throw new Error('Invalid prime value');
      if (prime !== "bn128" && prime !== "bls12381" && prime !== "goldilocks" && prime !== "grumpkin" && prime !== "pallas" && prime !== "vesta" && prime !== "secq256r1" && this._compilationConfig.version === '2.1.8') throw new Error('Invalid prime value');
      this._compilationConfig.prime = prime;
    }
  }, {
    key: "parse",
    value: function () {
      var _parse2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(path, fileContent) {
        var parsedOutput, result, mapReportFilePathToId, markers, _iterator, _step, report, label, file_id, startPosition, endPosition;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (fileContent) {
                  _context.next = 4;
                  break;
                }
                _context.next = 3;
                return this.call('fileManager', 'readFile', path);
              case 3:
                fileContent = _context.sent;
              case 4:
                _context.next = 6;
                return this.resolveDependencies(path, fileContent);
              case 6:
                this.lastParsedFiles = _context.sent;
                parsedOutput = this.compiler ? this.compiler.parse(path, this.lastParsedFiles) : (0, _circom_wasm.parse)(path, this.lastParsedFiles);
                _context.prev = 8;
                result = JSON.parse(parsedOutput.report());
                mapReportFilePathToId = {};
                if (!(result.length === 0)) {
                  _context.next = 16;
                  break;
                }
                _context.next = 14;
                return this.call('editor', 'clearErrorMarkers', [path]);
              case 14:
                _context.next = 55;
                break;
              case 16:
                markers = [];
                _iterator = _createForOfIteratorHelper(result);
                _context.prev = 18;
                _iterator.s();
              case 20:
                if ((_step = _iterator.n()).done) {
                  _context.next = 39;
                  break;
                }
                report = _step.value;
                _context.t0 = _regenerator["default"].keys(report.labels);
              case 23:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 37;
                  break;
                }
                label = _context.t1.value;
                file_id = report.labels[label].file_id;
                mapReportFilePathToId[file_id] = parsedOutput.get_report_name(parseInt(file_id));
                if (!(file_id === '0')) {
                  _context.next = 35;
                  break;
                }
                _context.next = 30;
                return this.call('editor',
                // @ts-ignore
                'getPositionAt', report.labels[label].range.start);
              case 30:
                startPosition = _context.sent;
                _context.next = 33;
                return this.call('editor',
                // @ts-ignore
                'getPositionAt', report.labels[label].range.end);
              case 33:
                endPosition = _context.sent;
                markers.push({
                  message: report.message,
                  severity: report.type.toLowerCase(),
                  position: {
                    start: {
                      line: startPosition.lineNumber,
                      column: startPosition.column
                    },
                    end: {
                      line: endPosition.lineNumber,
                      column: endPosition.column
                    }
                  },
                  file: path
                });
              case 35:
                _context.next = 23;
                break;
              case 37:
                _context.next = 20;
                break;
              case 39:
                _context.next = 44;
                break;
              case 41:
                _context.prev = 41;
                _context.t2 = _context["catch"](18);
                _iterator.e(_context.t2);
              case 44:
                _context.prev = 44;
                _iterator.f();
                return _context.finish(44);
              case 47:
                if (!(markers.length > 0)) {
                  _context.next = 52;
                  break;
                }
                _context.next = 50;
                return this.call('editor', 'addErrorMarker', markers);
              case 50:
                _context.next = 55;
                break;
              case 52:
                _context.next = 54;
                return this.call('editor', 'clearErrorMarkers', [path]);
              case 54:
                this.emit('statusChanged', {
                  key: 'none'
                });
              case 55:
                return _context.abrupt("return", [result, mapReportFilePathToId]);
              case 58:
                _context.prev = 58;
                _context.t3 = _context["catch"](8);
                throw new Error(_context.t3);
              case 61:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[8, 58], [18, 41, 44, 47]]);
      }));
      function parse(_x, _x2) {
        return _parse2.apply(this, arguments);
      }
      return parse;
    }()
  }, {
    key: "compile",
    value: function () {
      var _compile2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(path, compilationConfig) {
        var _this2 = this;
        var _yield$this$parse, _yield$this$parse2, parseErrors, filePathToId, prime, version, circuitApi, circuitProgram, circuitErrors, fileName, fileContent, searchComponentName, componentName, signals;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.internalEvents.emit('circuit_compiling_start');
                this.emit('statusChanged', {
                  key: 'loading',
                  title: 'Compiling...',
                  type: 'info'
                });
                // @ts-ignore
                this.call('terminal', 'log', {
                  type: 'log',
                  value: 'Compiling ' + path
                });
                _context2.next = 5;
                return this.parse(path);
              case 5:
                _yield$this$parse = _context2.sent;
                _yield$this$parse2 = (0, _slicedToArray2["default"])(_yield$this$parse, 2);
                parseErrors = _yield$this$parse2[0];
                filePathToId = _yield$this$parse2[1];
                if (!(parseErrors && parseErrors.length > 0)) {
                  _context2.next = 19;
                  break;
                }
                if (!(parseErrors[0].type === 'Error')) {
                  _context2.next = 16;
                  break;
                }
                this.internalEvents.emit('circuit_parsing_errored', parseErrors, filePathToId);
                this.logCompilerReport(parseErrors);
                return _context2.abrupt("return");
              case 16:
                if (parseErrors[0].type === 'Warning') {
                  this.internalEvents.emit('circuit_parsing_warning', parseErrors, filePathToId);
                  this.logCompilerReport(parseErrors);
                }
              case 17:
                _context2.next = 21;
                break;
              case 19:
                this.internalEvents.emit('circuit_parsing_done', parseErrors, filePathToId);
                this.emit('statusChanged', {
                  key: 'succeed',
                  title: 'circuit compiled successfully',
                  type: 'success'
                });
              case 21:
                if (compilationConfig) {
                  prime = compilationConfig.prime, version = compilationConfig.version;
                  this.compilerVersion = version;
                  this.compilerPrime = prime;
                }
                circuitApi = this.compiler ? this.compiler.compile(path, this.lastParsedFiles, {
                  prime: this._compilationConfig.prime
                }) : (0, _circom_wasm.compile)(path, this.lastParsedFiles, {
                  prime: this._compilationConfig.prime
                });
                circuitProgram = circuitApi.program();
                if (!(circuitProgram.length < 1)) {
                  _context2.next = 31;
                  break;
                }
                circuitErrors = circuitApi.report();
                this.logCompilerReport(circuitErrors);
                _paq.push(['trackEvent', 'circuit-compiler', 'compile', 'Compilation failed']);
                throw new Error(circuitErrors);
              case 31:
                this.lastCompiledFile = path;
                fileName = (0, _helper.extractNameFromKey)(path);
                this.lastCompiledCircuitPath = (0, _helper.extractParentFromKey)(path) + "/.bin/" + fileName.replace('circom', 'wasm');
                // @ts-ignore
                _context2.next = 36;
                return this.call('fileManager', 'writeFile', this.lastCompiledCircuitPath, circuitProgram, {
                  encoding: null
                });
              case 36:
                fileContent = this.lastParsedFiles[path];
                searchComponentName = fileContent.match(/component\s+main\s*(?:{[^{}]*})?\s*=\s*([A-Za-z_]\w*)\s*\(.*\)/);
                if (searchComponentName) {
                  componentName = searchComponentName[1];
                  signals = circuitApi.input_signals(componentName);
                  this.internalEvents.emit('circuit_compiling_done', signals);
                } else {
                  this.internalEvents.emit('circuit_compiling_done', []);
                }
                _paq.push(['trackEvent', 'circuit-compiler', 'compile', 'Compilation successful']);
                circuitApi.log().map(function (log) {
                  log && _this2.call('terminal', 'log', {
                    type: 'log',
                    value: log
                  });
                });
                // @ts-ignore
                this.call('terminal', 'log', {
                  type: 'typewritersuccess',
                  value: 'Everything went okay'
                });
              case 42:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function compile(_x3, _x4) {
        return _compile2.apply(this, arguments);
      }
      return compile;
    }()
  }, {
    key: "generateR1cs",
    value: function () {
      var _generateR1cs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(path, compilationConfig) {
        var _this3 = this;
        var _yield$this$parse3, _yield$this$parse4, parseErrors, filePathToId, prime, version, r1csApi, r1csProgram, r1csErrors, fileName, writePath;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.internalEvents.emit('circuit_generating_r1cs_start');
                this.emit('statusChanged', {
                  key: 'loading',
                  title: 'Generating...',
                  type: 'info'
                });
                // @ts-ignore
                this.call('terminal', 'log', {
                  type: 'log',
                  value: 'Generating R1CS for ' + path
                });
                _context3.next = 5;
                return this.parse(path);
              case 5:
                _yield$this$parse3 = _context3.sent;
                _yield$this$parse4 = (0, _slicedToArray2["default"])(_yield$this$parse3, 2);
                parseErrors = _yield$this$parse4[0];
                filePathToId = _yield$this$parse4[1];
                if (!(parseErrors && parseErrors.length > 0)) {
                  _context3.next = 19;
                  break;
                }
                if (!(parseErrors[0].type === 'Error')) {
                  _context3.next = 16;
                  break;
                }
                this.internalEvents.emit('circuit_parsing_errored', parseErrors);
                this.logCompilerReport(parseErrors);
                return _context3.abrupt("return");
              case 16:
                if (parseErrors[0].type === 'Warning') {
                  this.internalEvents.emit('circuit_parsing_warning', parseErrors);
                  this.logCompilerReport(parseErrors);
                }
              case 17:
                _context3.next = 21;
                break;
              case 19:
                this.internalEvents.emit('circuit_parsing_done', parseErrors, filePathToId);
                this.emit('statusChanged', {
                  key: 'succeed',
                  title: 'r1cs generated successfully',
                  type: 'success'
                });
              case 21:
                if (compilationConfig) {
                  prime = compilationConfig.prime, version = compilationConfig.version;
                  this.compilerVersion = version;
                  this.compilerPrime = prime;
                }
                r1csApi = this.compiler ? this.compiler.generate_r1cs(path, this.lastParsedFiles, {
                  prime: this._compilationConfig.prime
                }) : (0, _circom_wasm.generate_r1cs)(path, this.lastParsedFiles, {
                  prime: this._compilationConfig.prime
                });
                r1csProgram = r1csApi.program();
                if (!(r1csProgram.length < 1)) {
                  _context3.next = 31;
                  break;
                }
                r1csErrors = r1csApi.report();
                this.logCompilerReport(r1csErrors);
                _paq.push(['trackEvent', 'circuit-compiler', 'generateR1cs', 'R1CS Generation failed']);
                throw new Error(r1csErrors);
              case 31:
                this.internalEvents.emit('circuit_generating_r1cs_done');
                fileName = (0, _helper.extractNameFromKey)(path);
                writePath = (0, _helper.extractParentFromKey)(path) + "/.bin/" + fileName.replace('circom', 'r1cs'); // @ts-ignore
                _context3.next = 36;
                return this.call('fileManager', 'writeFile', writePath, r1csProgram, true);
              case 36:
                _paq.push(['trackEvent', 'circuit-compiler', 'generateR1cs', 'R1CS Generation successful']);
                r1csApi.log().map(function (log) {
                  log && _this3.call('terminal', 'log', {
                    type: 'log',
                    value: log
                  });
                });
                // @ts-ignore
                this.call('terminal', 'log', {
                  type: 'typewritersuccess',
                  value: 'Everything went okay'
                });
              case 39:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function generateR1cs(_x5, _x6) {
        return _generateR1cs.apply(this, arguments);
      }
      return generateR1cs;
    }()
  }, {
    key: "computeWitness",
    value: function () {
      var _computeWitness = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(input) {
        var wasmPath, buffer, dataRead, witness;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.internalEvents.emit('circuit_computing_witness_start');
                this.emit('statusChanged', {
                  key: 'loading',
                  title: 'Computing...',
                  type: 'info'
                });
                wasmPath = this.lastCompiledCircuitPath;
                if (wasmPath) {
                  _context4.next = 5;
                  break;
                }
                throw new Error('No wasm file found');
              case 5:
                _context4.next = 7;
                return this.call('fileManager', 'readFile', wasmPath, {
                  encoding: null
                });
              case 7:
                buffer = _context4.sent;
                dataRead = new Uint8Array(buffer);
                if (!this.compiler) {
                  _context4.next = 15;
                  break;
                }
                _context4.next = 12;
                return this.compiler.generate_witness(dataRead, input);
              case 12:
                _context4.t0 = _context4.sent;
                _context4.next = 18;
                break;
              case 15:
                _context4.next = 17;
                return (0, _circom_wasm.generate_witness)(dataRead, input);
              case 17:
                _context4.t0 = _context4.sent;
              case 18:
                witness = _context4.t0;
                _context4.next = 21;
                return this.call('fileManager', 'writeFile', wasmPath.replace('.wasm', '.wtn'), witness, true);
              case 21:
                _paq.push(['trackEvent', 'circuit-compiler', 'computeWitness', 'Witness computing successful']);
                this.internalEvents.emit('circuit_computing_witness_done');
                this.emit('statusChanged', {
                  key: 'succeed',
                  title: 'witness computed successfully',
                  type: 'success'
                });
              case 24:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function computeWitness(_x7) {
        return _computeWitness.apply(this, arguments);
      }
      return computeWitness;
    }()
  }, {
    key: "resolveDependencies",
    value: function () {
      var _resolveDependencies = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(filePath, fileContent, output) {
        var _this4 = this;
        var depPath,
          blackPath,
          includes,
          _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                depPath = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : '';
                blackPath = _args6.length > 4 && _args6[4] !== undefined ? _args6[4] : [];
                if (!output) output = (0, _defineProperty2["default"])({}, filePath, fileContent);
                // extract all includes
                includes = (fileContent.match(/include ['"].*['"]/g) || []).map(function (include) {
                  return include.replace(/include ['"]/g, '').replace(/['"]/g, '');
                });
                _context6.next = 6;
                return Promise.all(includes.map( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(include) {
                    var dependencyContent, path, pathExists, relativePath, relativePathExists, splitInclude, version, includeRegex, replacement, absIncludePath, dependencyIncludes;
                    return _regenerator["default"].wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            if (!blackPath.includes(include)) {
                              _context5.next = 2;
                              break;
                            }
                            return _context5.abrupt("return");
                          case 2:
                            dependencyContent = '';
                            path = include.replace(/(\.\.\/)+/g, ''); // @ts-ignore
                            _context5.next = 6;
                            return _this4.call('fileManager', 'exists', path);
                          case 6:
                            pathExists = _context5.sent;
                            if (!pathExists) {
                              _context5.next = 13;
                              break;
                            }
                            _context5.next = 10;
                            return _this4.call('fileManager', 'readFile', path);
                          case 10:
                            dependencyContent = _context5.sent;
                            _context5.next = 69;
                            break;
                          case 13:
                            // if include import (path) does not exist, try to construct relative path using the original file path (current file opened in editor)
                            relativePath = _path["default"].resolve(filePath.slice(0, filePath.lastIndexOf('/')), include);
                            if (relativePath.indexOf('/') === 0) relativePath = relativePath.slice(1);
                            _context5.next = 17;
                            return _this4.call('fileManager',
                            // @ts-ignore
                            'exists', relativePath);
                          case 17:
                            relativePathExists = _context5.sent;
                            if (!relativePathExists) {
                              _context5.next = 25;
                              break;
                            }
                            // fetch file content if include import exists as a relative path
                            path = relativePath;
                            _context5.next = 22;
                            return _this4.call('fileManager', 'readFile', relativePath);
                          case 22:
                            dependencyContent = _context5.sent;
                            _context5.next = 69;
                            break;
                          case 25:
                            if (!include.startsWith('circomlib')) {
                              _context5.next = 57;
                              break;
                            }
                            splitInclude = include.split('/');
                            version = splitInclude[1].match(/v[0-9]+.[0-9]+.[0-9]+/g);
                            _context5.prev = 28;
                            if (!(version && version[0])) {
                              _context5.next = 36;
                              break;
                            }
                            path = ".deps/https/raw.githubusercontent.com/iden3/circomlib/".concat(version[0], "/").concat(splitInclude.slice(2).join('/'));
                            _context5.next = 33;
                            return _this4.call('contentImport', 'resolveAndSave', path, null);
                          case 33:
                            dependencyContent = _context5.sent;
                            _context5.next = 40;
                            break;
                          case 36:
                            path = ".deps/https/raw.githubusercontent.com/iden3/circomlib/master/".concat(splitInclude.slice(1).join('/'));
                            _context5.next = 39;
                            return _this4.call('contentImport', 'resolveAndSave', path, null);
                          case 39:
                            dependencyContent = _context5.sent;
                          case 40:
                            _context5.next = 55;
                            break;
                          case 42:
                            _context5.prev = 42;
                            _context5.t0 = _context5["catch"](28);
                            if (!(version && version[0])) {
                              _context5.next = 51;
                              break;
                            }
                            path = "https://raw.githubusercontent.com/iden3/circomlib/".concat(version[0], "/").concat(splitInclude.slice(2).join('/'));
                            _context5.next = 48;
                            return _this4.call('contentImport', 'resolveAndSave', path, null);
                          case 48:
                            dependencyContent = _context5.sent;
                            _context5.next = 55;
                            break;
                          case 51:
                            path = "https://raw.githubusercontent.com/iden3/circomlib/master/".concat(splitInclude.slice(1).join('/'));
                            _context5.next = 54;
                            return _this4.call('contentImport', 'resolveAndSave', path, null);
                          case 54:
                            dependencyContent = _context5.sent;
                          case 55:
                            _context5.next = 69;
                            break;
                          case 57:
                            if (!depPath) {
                              _context5.next = 66;
                              break;
                            }
                            // resolves relative dependencies for .deps folder
                            path = _path["default"].resolve(depPath.slice(0, depPath.lastIndexOf('/')), include);
                            path = path.replace('https:/', 'https://');
                            if (path.indexOf('/') === 0) path = path.slice(1);
                            _context5.next = 63;
                            return _this4.call('contentImport', 'resolveAndSave', path, null);
                          case 63:
                            dependencyContent = _context5.sent;
                            _context5.next = 69;
                            break;
                          case 66:
                            _context5.next = 68;
                            return _this4.call('contentImport', 'resolveAndSave', path, null);
                          case 68:
                            dependencyContent = _context5.sent;
                          case 69:
                            if (path.indexOf('https://') === 0) {
                              // Regular expression to match include statements and make deps imports uniform
                              includeRegex = /include "(.+?)";/g;
                              replacement = 'include "circomlib/circuits/$1";';
                              dependencyContent = dependencyContent.replace(includeRegex, replacement);
                            } else {
                              if (!include.startsWith('circomlib') && !_path["default"].isAbsolute(filePath) && !_path["default"].isAbsolute(path)) {
                                // if include is not absolute, resolve it using the parent path of the current file opened in editor
                                absIncludePath = _path["default"].resolve('/' + filePath.slice(0, filePath.lastIndexOf('/')), '/' + path);
                                output[filePath] = output[filePath].replace("".concat(include), "".concat(absIncludePath));
                                include = absIncludePath;
                              }
                            }
                            // extract all includes from the dependency content
                            dependencyIncludes = (dependencyContent.match(/include ['"].*['"]/g) || []).map(function (childInclude) {
                              var includeName = childInclude.replace(/include ['"]/g, '').replace(/['"]/g, '');
                              var absFilePath = _path["default"].resolve(include.slice(0, include.lastIndexOf('/')), includeName);
                              absFilePath = include.startsWith('circomlib') ? absFilePath.substring(1) : absFilePath;
                              if (!blackPath.includes(absFilePath)) {
                                if (!includeName.startsWith('circomlib')) {
                                  dependencyContent = dependencyContent.replace("".concat(includeName), "".concat(absFilePath));
                                  return absFilePath;
                                }
                                return includeName;
                              } else {
                                // if include already exists in output, remove it from the dependency content
                                var includePattern = new RegExp("include \"\\s*".concat(includeName, "\\s*\";"), 'g');
                                dependencyContent = dependencyContent.replace(includePattern, '');
                                return;
                              }
                            }).filter(function (childInclude) {
                              return childInclude;
                            });
                            blackPath.push(include);
                            // recursively resolve all dependencies of the dependency
                            if (!(dependencyIncludes.length > 0)) {
                              _context5.next = 78;
                              break;
                            }
                            _context5.next = 75;
                            return _this4.resolveDependencies(filePath, dependencyContent, output, path, blackPath);
                          case 75:
                            output[include] = dependencyContent;
                            _context5.next = 79;
                            break;
                          case 78:
                            output[include] = dependencyContent;
                          case 79:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, null, [[28, 42]]);
                  }));
                  return function (_x11) {
                    return _ref.apply(this, arguments);
                  };
                }()));
              case 6:
                return _context6.abrupt("return", output);
              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));
      function resolveDependencies(_x8, _x9, _x10) {
        return _resolveDependencies.apply(this, arguments);
      }
      return resolveDependencies;
    }()
  }, {
    key: "resolveReportPath",
    value: function () {
      var _resolveReportPath = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(path) {
        var pathExists, relativePath, relativePathExists, splitInclude, version, exists;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.call('fileManager', 'exists', path);
              case 2:
                pathExists = _context7.sent;
                if (!pathExists) {
                  _context7.next = 7;
                  break;
                }
                return _context7.abrupt("return", path);
              case 7:
                // if include import (path) does not exist, try to construct relative path using the original file path (current file opened in editor)
                relativePath = _path["default"].resolve(this.lastCompiledFile.slice(0, this.lastCompiledFile.lastIndexOf('/')), path);
                if (relativePath.indexOf('/') === 0) relativePath = relativePath.slice(1);
                // @ts-ignore
                _context7.next = 11;
                return this.call('fileManager', 'exists', relativePath);
              case 11:
                relativePathExists = _context7.sent;
                if (!relativePathExists) {
                  _context7.next = 16;
                  break;
                }
                return _context7.abrupt("return", relativePath);
              case 16:
                if (!path.startsWith('circomlib')) {
                  _context7.next = 30;
                  break;
                }
                // try to resolve include import from github if it is a circomlib dependency
                splitInclude = path.split('/');
                version = splitInclude[1].match(/v[0-9]+.[0-9]+.[0-9]+/g);
                if (version && version[0]) {
                  path = "/.deps/https/raw.githubusercontent.com/iden3/circomlib/".concat(version[0], "/").concat(splitInclude.slice(2).join('/'));
                } else {
                  path = "/.deps/https/raw.githubusercontent.com/iden3/circomlib/master/".concat(splitInclude.slice(1).join('/'));
                }
                // @ts-ignore
                _context7.next = 22;
                return this.call('fileManager', 'exists', path);
              case 22:
                exists = _context7.sent;
                if (!exists) {
                  _context7.next = 27;
                  break;
                }
                return _context7.abrupt("return", path);
              case 27:
                throw new Error("Report path ".concat(path, " do no exist in the Remix FileSystem"));
              case 28:
                _context7.next = 31;
                break;
              case 30:
                throw new Error("Report path ".concat(path, " do no exist in the Remix FileSystem"));
              case 31:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
      function resolveReportPath(_x12) {
        return _resolveReportPath.apply(this, arguments);
      }
      return resolveReportPath;
    }()
  }, {
    key: "logCompilerReport",
    value: function () {
      var _logCompilerReport = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(report) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.call('terminal', 'log', {
                  type: 'log',
                  value: JSON.stringify(report, null, 2)
                });
                if (report[0].type === 'Error') {
                  this.call('terminal', 'log', {
                    type: 'error',
                    value: 'previous errors were found'
                  });
                  this.emit('statusChanged', {
                    key: report.length,
                    title: "You have ".concat(report.length, " problem").concat(report.length === 1 ? '' : 's'),
                    type: 'error'
                  });
                }
                if (report[0].type === 'Warning') {
                  this.call('terminal', 'log', {
                    type: 'log',
                    value: 'previous warnings were found'
                  });
                  this.emit('statusChanged', {
                    key: report.length,
                    title: "You have ".concat(report.length, " problem").concat(report.length === 1 ? '' : 's'),
                    type: 'warning'
                  });
                }
              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
      function logCompilerReport(_x13) {
        return _logCompilerReport.apply(this, arguments);
      }
      return logCompilerReport;
    }()
  }]);
  return CircomPluginClient;
}(_plugin.PluginClient);
exports.CircomPluginClient = CircomPluginClient;

/***/ }),

/***/ 2002:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
var _react = _interopRequireDefault(__webpack_require__(47182));
var _client = __webpack_require__(78244);
var _app = _interopRequireDefault(__webpack_require__(957));
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/circuit-compiler/src/main.tsx";
var container = document.getElementById('root');
if (container) {
  (0, _client.createRoot)(container).render( /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_app["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 32
  }, void 0));
}

/***/ }),

/***/ 14829:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EventManager = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(32830));
var _createClass2 = _interopRequireDefault(__webpack_require__(59152));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var EventManager = /*#__PURE__*/function () {
  function EventManager() {
    (0, _classCallCheck2["default"])(this, EventManager);
    (0, _defineProperty2["default"])(this, "registered", void 0);
    (0, _defineProperty2["default"])(this, "anonymous", void 0);
    this.registered = {};
    this.anonymous = {};
  }

  /*
    * Unregister a listener.
    * Note that if obj is a function. the unregistration will be applied to the dummy obj {}.
    *
    * @param {String} eventName  - the event name
    * @param {Object or Func} obj - object that will listen on this event
    * @param {Func} func         - function of the listeners that will be executed
  */
  (0, _createClass2["default"])(EventManager, [{
    key: "unregister",
    value: function unregister(eventName, obj, func) {
      if (!this.registered[eventName]) {
        return;
      }
      if (obj instanceof Function) {
        func = obj;
        obj = this.anonymous;
      }
      for (var reg in this.registered[eventName]) {
        if (this.registered[eventName][reg].obj === obj && this.registered[eventName][reg].func.toString() === func.toString()) {
          this.registered[eventName].splice(reg, 1);
        }
      }
    }

    /*
      * Register a new listener.
      * Note that if obj is a function, the function registration will be associated with the dummy object {}
      *
      * @param {String} eventName  - the event name
      * @param {Object or Func} obj - object that will listen on this event
      * @param {Func} func         - function of the listeners that will be executed
    */
  }, {
    key: "register",
    value: function register(eventName, obj, func) {
      if (!this.registered[eventName]) {
        this.registered[eventName] = [];
      }
      if (obj instanceof Function) {
        func = obj;
        obj = this.anonymous;
      }
      this.registered[eventName].push({
        obj: obj,
        func: func
      });
    }

    /*
      * trigger event.
      * Every listener have their associated function executed
      *
      * @param {String} eventName  - the event name
      * @param {Array}j - argument that will be passed to the executed function.
    */
  }, {
    key: "trigger",
    value: function trigger(eventName, args) {
      if (!this.registered[eventName]) {
        return;
      }
      for (var listener in this.registered[eventName]) {
        var l = this.registered[eventName][listener];
        if (l.func) l.func.apply(l.obj === this.anonymous ? {} : l.obj, args);
      }
    }
  }]);
  return EventManager;
}();
exports.EventManager = EventManager;

/***/ }),

/***/ 19666:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EventsDecoder = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(32830));
var _createClass2 = _interopRequireDefault(__webpack_require__(59152));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var _ethers = __webpack_require__(55065);
var _txHelper = __webpack_require__(15642);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/**
  * Register to txListener and extract events
  *
  */
var EventsDecoder = /*#__PURE__*/function () {
  function EventsDecoder(_ref) {
    var resolveReceipt = _ref.resolveReceipt;
    (0, _classCallCheck2["default"])(this, EventsDecoder);
    (0, _defineProperty2["default"])(this, "resolveReceipt", void 0);
    this.resolveReceipt = resolveReceipt;
  }

  /**
  * use Transaction Receipt to decode logs. assume that the transaction as already been resolved by txListener.
  * logs are decoded only if the contract if known by remix.
  *
  * @param {Object} tx - transaction object
  * @param {Function} cb - callback
  */
  (0, _createClass2["default"])(EventsDecoder, [{
    key: "parseLogs",
    value: function parseLogs(tx, contractName, compiledContracts, cb) {
      var _this = this;
      if (tx.isCall) return cb(null, {
        decoded: [],
        raw: []
      });
      this.resolveReceipt(tx, function (error, receipt) {
        if (error) return cb(error);
        _this._decodeLogs(tx, receipt, contractName, compiledContracts, cb);
      });
    }
  }, {
    key: "_decodeLogs",
    value: function _decodeLogs(tx, receipt, contract, contracts, cb) {
      if (!contract || !receipt) {
        return cb('cannot decode logs - contract or receipt not resolved ');
      }
      if (!receipt.logs) {
        return cb(null, {
          decoded: [],
          raw: []
        });
      }
      this._decodeEvents(tx, receipt.logs, contract, contracts, cb);
    }
  }, {
    key: "_eventABI",
    value: function _eventABI(contract) {
      var eventABI = {};
      var abi = new _ethers.ethers.utils.Interface(contract.abi);
      for (var e in abi.events) {
        var event = abi.getEvent(e);
        eventABI[abi.getEventTopic(e).replace('0x', '')] = {
          event: event.name,
          inputs: event.inputs,
          object: event,
          abi: abi
        };
      }
      return eventABI;
    }
  }, {
    key: "_eventsABI",
    value: function _eventsABI(compiledContracts) {
      var _this2 = this;
      var eventsABI = {};
      (0, _txHelper.visitContracts)(compiledContracts, function (contract) {
        eventsABI[contract.name] = _this2._eventABI(contract.object);
      });
      return eventsABI;
    }
  }, {
    key: "_event",
    value: function _event(hash, eventsABI) {
      // get all the events responding to that hash.
      var contracts = [];
      for (var k in eventsABI) {
        if (eventsABI[k][hash]) {
          var event = eventsABI[k][hash];
          var _iterator = _createForOfIteratorHelper(event.inputs),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var input = _step.value;
              if (input.type === 'function') {
                input.type = 'bytes24';
                input.baseType = 'bytes24';
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          contracts.push(event);
        }
      }
      return contracts;
    }
  }, {
    key: "_stringifyBigNumber",
    value: function _stringifyBigNumber(value) {
      return value._isBigNumber ? value.toString() : value;
    }
  }, {
    key: "_stringifyEvent",
    value: function _stringifyEvent(value) {
      var _this3 = this;
      if (value === null || value === undefined) return ' - ';
      if (value._ethersType) value.type = value._ethersType;
      if (Array.isArray(value)) {
        // for struct && array
        return value.map(function (item) {
          return _this3._stringifyEvent(item);
        });
      } else {
        return this._stringifyBigNumber(value);
      }
    }
  }, {
    key: "_decodeEvents",
    value: function _decodeEvents(tx, logs, contractName, compiledContracts, cb) {
      var eventsABI = this._eventsABI(compiledContracts);
      var events = [];
      for (var i in logs) {
        // [address, topics, mem]
        var log = logs[i];
        var topicId = log.topics[0];
        var eventAbis = this._event(topicId.replace('0x', ''), eventsABI);
        var _iterator2 = _createForOfIteratorHelper(eventAbis),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var eventAbi = _step2.value;
            try {
              if (eventAbi) {
                var decodedlog = eventAbi.abi.parseLog(log);
                var decoded = {};
                for (var v in decodedlog.args) {
                  decoded[v] = this._stringifyEvent(decodedlog.args[v]);
                }
                events.push({
                  from: log.address,
                  topic: topicId,
                  event: eventAbi.event,
                  args: decoded
                });
              } else {
                events.push({
                  from: log.address,
                  data: log.data,
                  topics: log.topics
                });
              }
              break; // if one of the iteration is successful
            } catch (e) {
              continue;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      cb(null, {
        decoded: events,
        raw: logs
      });
    }
  }]);
  return EventsDecoder;
}();
exports.EventsDecoder = EventsDecoder;

/***/ }),

/***/ 95468:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
  * returns the fork name for the @argument networkId and @argument blockNumber
  *
  * @param {Object} networkId - network Id (1 for VM, 3 for Ropsten, 4 for Rinkeby, 5 for Goerli)
  * @param {Object} blockNumber - block number
  * @return {String} - fork name (Berlin, Istanbul, ...)
  */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.forkAt = forkAt;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function forkAt(networkId, blockNumber) {
  if (forks[networkId]) {
    var currentForkName = forks[networkId][0].name;
    var _iterator = _createForOfIteratorHelper(forks[networkId]),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var fork = _step.value;
        if (blockNumber >= fork.number) {
          currentForkName = fork.name;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return currentForkName;
  }
  return 'london';
}

// see https://github.com/ethereum/go-ethereum/blob/master/params/config.go
var forks = {
  1: [{
    number: 4370000,
    name: 'byzantium'
  }, {
    number: 7280000,
    name: 'constantinople'
  }, {
    number: 7280000,
    name: 'petersburg'
  }, {
    number: 9069000,
    name: 'istanbul'
  }, {
    number: 9200000,
    name: 'muirglacier'
  }, {
    number: 12244000,
    name: 'berlin'
  }, {
    number: 12965000,
    name: 'london'
  }, {
    number: 13773000,
    name: 'arrowGlacier'
  }, {
    number: 15050000,
    name: 'grayGlacier'
  }, {
    number: 15537394,
    name: 'paris'
  }, {
    number: 17034870,
    name: 'shanghai'
  }, {
    number: 19426587,
    name: 'cancun'
  }],
  3: [{
    number: 1700000,
    name: 'byzantium'
  }, {
    number: 4230000,
    name: 'constantinople'
  }, {
    number: 4939394,
    name: 'petersburg'
  }, {
    number: 6485846,
    name: 'istanbul'
  }, {
    number: 7117117,
    name: 'muirglacier'
  }, {
    number: 9812189,
    name: 'berlin'
  }, {
    number: 10499401,
    name: 'london'
  }],
  4: [{
    number: 1035301,
    name: 'byzantium'
  }, {
    number: 3660663,
    name: 'constantinople'
  }, {
    number: 4321234,
    name: 'petersburg'
  }, {
    number: 5435345,
    name: 'istanbul'
  }, {
    number: 8290928,
    name: 'berlin'
  }, {
    number: 8897988,
    name: 'london'
  }],
  5: [{
    number: 1561651,
    name: 'istanbul'
  }, {
    number: 4460644,
    name: 'berlin'
  }, {
    number: 5062605,
    name: 'london'
  }]
};

/***/ }),

/***/ 9531:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LogsManager = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15159));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(32830));
var _createClass2 = _interopRequireDefault(__webpack_require__(59152));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var _async = __webpack_require__(46163);
var _crypto = __webpack_require__(49068);
var _util = __webpack_require__(35178);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var LogsManager = /*#__PURE__*/function () {
  function LogsManager() {
    (0, _classCallCheck2["default"])(this, LogsManager);
    (0, _defineProperty2["default"])(this, "notificationCallbacks", void 0);
    (0, _defineProperty2["default"])(this, "subscriptions", void 0);
    (0, _defineProperty2["default"])(this, "filters", void 0);
    (0, _defineProperty2["default"])(this, "filterTracking", void 0);
    (0, _defineProperty2["default"])(this, "oldLogs", void 0);
    this.notificationCallbacks = [];
    this.subscriptions = {};
    this.filters = {};
    this.filterTracking = {};
    this.oldLogs = [];
  }
  (0, _createClass2["default"])(LogsManager, [{
    key: "checkBlock",
    value: function checkBlock(blockNumber, block, web3) {
      var _this = this;
      (0, _async.eachOf)(block.transactions, function (tx, i, next) {
        var txHash = (0, _util.bytesToHex)(tx.hash());
        web3.eth.getTransactionReceipt(txHash, function (_error, receipt) {
          if (!receipt) return next();
          var _iterator = _createForOfIteratorHelper(receipt.logs),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var log = _step.value;
              _this.oldLogs.push({
                type: 'block',
                blockNumber: blockNumber,
                block: block,
                tx: tx,
                log: log,
                txNumber: i,
                receipt: receipt
              });
              var subscriptions = _this.getSubscriptionsFor({
                type: 'block',
                blockNumber: blockNumber,
                block: block,
                tx: tx,
                log: log,
                receipt: receipt
              });
              var _iterator2 = _createForOfIteratorHelper(subscriptions),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var subscriptionId = _step2.value;
                  var result = {
                    logIndex: '0x1',
                    // 1
                    blockNumber: blockNumber,
                    blockHash: (0, _util.bytesToHex)(block.hash()),
                    transactionHash: (0, _util.bytesToHex)(tx.hash()),
                    transactionIndex: '0x' + i.toString(16),
                    // TODO: if it's a contract deploy, it should be that address instead
                    address: log.address,
                    data: log.data,
                    topics: log.topics
                  };
                  if (result.address === '0x') {
                    delete result.address;
                  }
                  var response = {
                    jsonrpc: '2.0',
                    method: 'eth_subscription',
                    params: {
                      result: result,
                      subscription: subscriptionId
                    }
                  };
                  _this.transmit(response);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
      }, function (_err) {});
    }
  }, {
    key: "eventMatchesFilter",
    value: function eventMatchesFilter(changeEvent, queryType, queryFilter) {
      if (queryFilter.topics.filter(function (logTopic) {
        return changeEvent.log.topics.indexOf(logTopic) >= 0;
      }).length === 0) return false;
      if (queryType === 'logs') {
        var fromBlock = parseInt(queryFilter.fromBlock || '0x0');
        var toBlock;
        if (queryFilter.toBlock === 'latest' || !queryFilter.toBlock) toBlock = Number.MAX_VALUE;else toBlock = parseInt(queryFilter.toBlock);
        var targetAddress = (0, _util.toChecksumAddress)(queryFilter.address);
        if (toBlock >= parseInt(changeEvent.blockNumber) && fromBlock <= parseInt(changeEvent.blockNumber)) {
          if (changeEvent.log && changeEvent.log.address === targetAddress) {
            return true;
          }
        }
        return false;
      }
      return false;
    }
  }, {
    key: "getSubscriptionsFor",
    value: function getSubscriptionsFor(changeEvent) {
      var matchedSubscriptions = [];
      for (var _i = 0, _Object$keys = Object.keys(this.subscriptions); _i < _Object$keys.length; _i++) {
        var subscriptionId = _Object$keys[_i];
        var subscriptionParams = this.subscriptions[subscriptionId];
        var _subscriptionParams = (0, _slicedToArray2["default"])(subscriptionParams, 2),
          queryType = _subscriptionParams[0],
          queryFilter = _subscriptionParams[1];
        if (this.eventMatchesFilter(changeEvent, queryType, queryFilter || {
          topics: []
        })) {
          matchedSubscriptions.push(subscriptionId);
        }
      }
      return matchedSubscriptions;
    }
  }, {
    key: "getLogsForSubscription",
    value: function getLogsForSubscription(subscriptionId) {
      var subscriptionParams = this.subscriptions[subscriptionId];
      var _subscriptionParams2 = (0, _slicedToArray2["default"])(subscriptionParams, 2),
        _queryType = _subscriptionParams2[0],
        queryFilter = _subscriptionParams2[1]; // eslint-disable-line

      return this.getLogsFor(queryFilter);
    }
  }, {
    key: "transmit",
    value: function transmit(result) {
      this.notificationCallbacks.forEach(function (callback) {
        if (result.params.result.raw) {
          result.params.result.data = result.params.result.raw.data;
          result.params.result.topics = result.params.result.raw.topics;
        }
        callback(result);
      });
    }
  }, {
    key: "addListener",
    value: function addListener(_type, cb) {
      this.notificationCallbacks.push(cb);
    }
  }, {
    key: "subscribe",
    value: function subscribe(params) {
      var subscriptionId = '0x' + (0, _crypto.randomBytes)(16).toString('hex');
      this.subscriptions[subscriptionId] = params;
      return subscriptionId;
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(subscriptionId) {
      delete this.subscriptions[subscriptionId];
    }
  }, {
    key: "newFilter",
    value: function newFilter(filterType, params) {
      var filterId = '0x' + (0, _crypto.randomBytes)(16).toString('hex');
      if (filterType === 'block' || filterType === 'pendingTransactions') {
        this.filters[filterId] = {
          filterType: filterType
        };
      }
      if (filterType === 'filter') {
        this.filters[filterId] = {
          filterType: filterType,
          params: params
        };
      }
      this.filterTracking[filterId] = {};
      return filterId;
    }
  }, {
    key: "uninstallFilter",
    value: function uninstallFilter(filterId) {
      delete this.filters[filterId];
    }
  }, {
    key: "getLogsForFilter",
    value: function getLogsForFilter(filterId, logsOnly) {
      var _this$filters$filterI = this.filters[filterId],
        filterType = _this$filters$filterI.filterType,
        params = _this$filters$filterI.params;
      var tracking = this.filterTracking[filterId];
      if (logsOnly || filterType === 'filter') {
        return this.getLogsFor(params || {
          topics: []
        });
      }
      if (filterType === 'block') {
        var blocks = this.oldLogs.filter(function (x) {
          return x.type === 'block';
        }).filter(function (x) {
          return tracking.block === undefined || x.blockNumber >= tracking.block;
        });
        tracking.block = blocks[blocks.length - 1];
        return blocks.map(function (block) {
          return (0, _util.bytesToHex)(block.hash());
        });
      }
      if (filterType === 'pendingTransactions') {
        return [];
      }
    }
  }, {
    key: "getLogsByTxHash",
    value: function getLogsByTxHash(hash) {
      return this.oldLogs.filter(function (log) {
        return (0, _util.bytesToHex)(log.tx.hash()) === hash;
      }).map(function (log) {
        return {
          logIndex: '0x1',
          // 1
          blockNumber: log.blockNumber,
          blockHash: (0, _util.bytesToHex)(log.block.hash()),
          transactionHash: (0, _util.bytesToHex)(log.tx.hash()),
          transactionIndex: '0x' + log.txNumber.toString(16),
          // TODO: if it's a contract deploy, it should be that address instead
          address: log.log.address,
          data: log.log.data,
          topics: log.log.topics
        };
      });
    }
  }, {
    key: "getLogsFor",
    value: function getLogsFor(params) {
      var results = [];
      var _iterator3 = _createForOfIteratorHelper(this.oldLogs),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var log = _step3.value;
          if (this.eventMatchesFilter(log, 'logs', params)) {
            results.push({
              logIndex: '0x1',
              // 1
              blockNumber: log.blockNumber,
              blockHash: (0, _util.bytesToHex)(log.block.hash()),
              transactionHash: (0, _util.bytesToHex)(log.tx.hash()),
              transactionIndex: '0x' + log.txNumber.toString(16),
              // TODO: if it's a contract deploy, it should be that address instead
              address: log.log.address,
              data: log.log.data,
              topics: log.log.topics
            });
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return results;
    }
  }]);
  return LogsManager;
}();
exports.LogsManager = LogsManager;

/***/ }),

/***/ 55491:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.callFunction = callFunction;
exports.checkError = checkError;
exports.createContract = createContract;
var _ethers = __webpack_require__(55065);
var _txHelper = __webpack_require__(15642);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/**
  * deploy the given contract
  *
  * @param {String} from    - sender address
  * @param {String} data    - data to send with the transaction ( return of txFormat.buildData(...) ).
  * @param {String} value    - decimal representation of value.
  * @param {String} gasLimit    - decimal representation of gas limit.
  * @param {Object} txRunner    - TxRunner.js instance
  * @param {Object} callbacks    - { confirmationCb, gasEstimationForceSend, promptCb }
  *     [validate transaction] confirmationCb (network, tx, gasEstimation, continueTxExecution, cancelCb)
  *     [transaction failed, force send] gasEstimationForceSend (error, continueTxExecution, cancelCb)
  *     [personal mode enabled, need password to continue] promptCb (okCb, cancelCb)
  * @param {Function} finalCallback    - last callback.
  */
function createContract(from, data, value, gasLimit, txRunner, callbacks, finalCallback) {
  if (!callbacks.confirmationCb || !callbacks.gasEstimationForceSend || !callbacks.promptCb) {
    return finalCallback('all the callbacks must have been defined');
  }
  var tx = {
    from: from,
    to: null,
    data: data,
    useCall: false,
    value: value,
    gasLimit: gasLimit
  };
  txRunner.rawRun(tx, callbacks.confirmationCb, callbacks.gasEstimationForceSend, callbacks.promptCb, function (error, txResult) {
    // see universaldapp.js line 660 => 700 to check possible values of txResult (error case)
    finalCallback(error, txResult);
  });
}

/**
  * call the current given contract ! that will create a transaction !
  *
  * @param {String} from    - sender address
  * @param {String} to    - recipient address
  * @param {String} data    - data to send with the transaction ( return of txFormat.buildData(...) ).
  * @param {String} value    - decimal representation of value.
  * @param {String} gasLimit    - decimal representation of gas limit.
  * @param {Object} txRunner    - TxRunner.js instance
  * @param {Object} callbacks    - { confirmationCb, gasEstimationForceSend, promptCb }
  *     [validate transaction] confirmationCb (network, tx, gasEstimation, continueTxExecution, cancelCb)
  *     [transaction failed, force send] gasEstimationForceSend (error, continueTxExecution, cancelCb)
  *     [personal mode enabled, need password to continue] promptCb (okCb, cancelCb)
  * @param {Function} finalCallback    - last callback.
  */
function callFunction(from, to, data, value, gasLimit, funAbi, txRunner, callbacks, finalCallback) {
  var useCall = funAbi.stateMutability === 'view' || funAbi.stateMutability === 'pure' || funAbi.constant;
  var tx = {
    from: from,
    to: to,
    data: data,
    useCall: useCall,
    value: value,
    gasLimit: gasLimit
  };
  txRunner.rawRun(tx, callbacks.confirmationCb, callbacks.gasEstimationForceSend, callbacks.promptCb, function (error, txResult) {
    // see universaldapp.js line 660 => 700 to check possible values of txResult (error case)
    finalCallback(error, txResult);
  });
}

/**
  * check if the vm has errored
  *
  * @param {Object} execResult    - execution result given by the VM, contain errorMessage and errorDate
  * @param {Object} compiledContracts - Object containing contract compilation details
  * @return {Object} -  { error: true/false, message: DOMNode }
  */
function checkError(execResult, compiledContracts) {
  var errorCode = {
    OUT_OF_GAS: 'out of gas',
    STACK_UNDERFLOW: 'stack underflow',
    STACK_OVERFLOW: 'stack overflow',
    INVALID_JUMP: 'invalid JUMP',
    INVALID_OPCODE: 'invalid opcode',
    REVERT: 'revert',
    STATIC_STATE_CHANGE: 'static state change',
    INTERNAL_ERROR: 'internal error',
    CREATE_COLLISION: 'create collision',
    STOP: 'stop',
    REFUND_EXHAUSTED: 'refund exhausted'
  };
  var ret = {
    error: false,
    message: ''
  };
  if (!execResult.errorMessage) {
    return ret;
  }
  var exceptionError = execResult.errorMessage || '';
  var error = "Error occurred: ".concat(execResult.errorMessage, ".\n");
  var msg = '';
  if (exceptionError.includes(errorCode.INVALID_OPCODE)) {
    msg = '\t\n\tThe execution might have thrown OR the EVM version used by the selected environment is not compatible with the compiler EVM version.\n';
    ret.error = true;
  } else if (exceptionError === errorCode.OUT_OF_GAS) {
    msg = '\tThe transaction ran out of gas. Please increase the Gas Limit.\n';
    ret.error = true;
  } else if (exceptionError === errorCode.REVERT || exceptionError === 'execution reverted') {
    var returnData = execResult.errorData || '0x00000000';
    var returnDataHex = returnData.slice(2, 10);
    var customError;
    if (compiledContracts) {
      var decodedCustomErrorInputsClean;
      for (var _i = 0, _Object$keys = Object.keys(compiledContracts); _i < _Object$keys.length; _i++) {
        var file = _Object$keys[_i];
        for (var _i2 = 0, _Object$keys2 = Object.keys(compiledContracts[file]); _i2 < _Object$keys2.length; _i2++) {
          var contractName = _Object$keys2[_i2];
          var contract = compiledContracts[file][contractName];
          var _iterator = _createForOfIteratorHelper(contract.abi),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              if (item.type === 'error') {
                // ethers doesn't crash anymore if "error" type is specified, but it doesn't extract the errors. see:
                // https://github.com/ethers-io/ethers.js/commit/bd05aed070ac9e1421a3e2bff2ceea150bedf9b7
                // we need here to fake the type, so the "getSighash" function works properly
                var fn = (0, _txHelper.getFunctionFragment)(Object.assign({}, item, {
                  type: 'function',
                  stateMutability: 'nonpayable'
                }));
                if (!fn) continue;
                var sign = fn.getSighash(item.name);
                if (!sign) continue;
                if (returnDataHex === sign.replace('0x', '')) {
                  customError = item.name;
                  var functionDesc = fn.getFunction(item.name);
                  // decoding error parameters
                  var decodedCustomErrorInputs = fn.decodeFunctionData(functionDesc, returnData);
                  decodedCustomErrorInputsClean = {};
                  var devdoc = {};
                  // "contract" represents the compilation result containing the NATSPEC documentation
                  if (contract && fn.functions && Object.keys(fn.functions).length) {
                    var functionSignature = Object.keys(fn.functions)[0];
                    // we check in the 'devdoc' if there's a developer documentation for this error
                    try {
                      devdoc = contract.devdoc.errors && contract.devdoc.errors[functionSignature][0] || {};
                    } catch (e) {
                      console.error(e.message);
                    }
                    // we check in the 'userdoc' if there's an user documentation for this error
                    try {
                      var userdoc = contract.userdoc.errors && contract.userdoc.errors[functionSignature][0] || {};
                      if (userdoc && userdoc.notice) customError += ' : ' + userdoc.notice; // we append the user doc if any
                    } catch (e) {
                      console.error(e.message);
                    }
                  }
                  var inputIndex = 0;
                  var _iterator2 = _createForOfIteratorHelper(functionDesc.inputs),
                    _step2;
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var input = _step2.value;
                      var inputKey = input.name || inputIndex;
                      var v = decodedCustomErrorInputs[inputKey];
                      decodedCustomErrorInputsClean[inputKey] = {
                        value: v.toString ? v.toString() : v
                      };
                      if (devdoc && devdoc.params) {
                        decodedCustomErrorInputsClean[input.name].documentation = devdoc.params[inputKey]; // we add the developer documentation for this input parameter if any
                      }

                      inputIndex++;
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                  break;
                }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
      if (decodedCustomErrorInputsClean) {
        msg = '\tThe transaction has been reverted to the initial state.\nError provided by the contract:';
        msg += "\n".concat(customError);
        msg += '\nParameters:';
        msg += "\n".concat(JSON.stringify(decodedCustomErrorInputsClean, null, ' '));
      }
    }
    if (!customError) {
      // It is the hash of Error(string)
      if (returnData && returnDataHex === '08c379a0') {
        var abiCoder = new _ethers.ethers.utils.AbiCoder();
        var reason = abiCoder.decode(['string'], '0x' + returnData.slice(10))[0];
        msg = "\tThe transaction has been reverted to the initial state.\nReason provided by the contract: \"".concat(reason, "\".");
      } else {
        msg = '\tThe transaction has been reverted to the initial state.\nNote: The called function should be payable if you send value and the value you send should be less than your current balance.';
      }
    }
    ret.error = true;
  } else if (exceptionError === errorCode.STATIC_STATE_CHANGE) {
    msg = '\tState changes is not allowed in Static Call context\n';
    ret.error = true;
  }
  ret.message = "".concat(error, "\n").concat(exceptionError, "\n").concat(msg, "\nYou may want to cautiously increase the gas limit if the transaction went out of gas.");
  return ret;
}

/***/ }),

/***/ 69572:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(40144)["Buffer"];


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.REGEX_SCIENTIFIC = exports.REGEX_DECIMAL = void 0;
exports.atAddress = atAddress;
exports.buildData = buildData;
exports.decodeResponse = decodeResponse;
exports.deployLibrary = deployLibrary;
exports.encodeConstructorCallAndDeployLibraries = encodeConstructorCallAndDeployLibraries;
exports.encodeConstructorCallAndLinkLibraries = encodeConstructorCallAndLinkLibraries;
exports.encodeData = encodeData;
exports.encodeFunctionCall = encodeFunctionCall;
exports.encodeParams = encodeParams;
exports.isArrayOrStringStart = isArrayOrStringStart;
exports.linkBytecode = linkBytecode;
exports.linkBytecodeLegacy = linkBytecodeLegacy;
exports.linkBytecodeStandard = linkBytecodeStandard;
exports.linkLibraries = linkLibraries;
exports.linkLibrary = linkLibrary;
exports.linkLibraryStandard = linkLibraryStandard;
exports.linkLibraryStandardFromlinkReferences = linkLibraryStandardFromlinkReferences;
exports.normalizeParam = void 0;
exports.parseFunctionParams = parseFunctionParams;
exports.setLibraryAddress = setLibraryAddress;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var _ethers = __webpack_require__(55065);
var _txHelper = __webpack_require__(15642);
var _async = __webpack_require__(46163);
var _linker = __webpack_require__(49801);
var _util = __webpack_require__(35178);
var _fromExponential = _interopRequireDefault(__webpack_require__(4593));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/**
  * build the transaction data
  *
  * @param {Object} function abi
  * @param {Object} values to encode
  * @param {String} contractbyteCode
  */
function encodeData(funABI, values, contractbyteCode) {
  var encoded;
  var encodedHex;
  try {
    encoded = (0, _txHelper.encodeParams)(funABI, values);
    encodedHex = encoded.toString('hex');
  } catch (e) {
    return {
      error: 'cannot encode arguments'
    };
  }
  if (contractbyteCode) {
    return {
      data: '0x' + contractbyteCode + encodedHex.replace('0x', '')
    };
  } else {
    return {
      data: (0, _txHelper.encodeFunctionId)(funABI) + encodedHex.replace('0x', '')
    };
  }
}

/**
* encode function / constructor parameters
*
* @param {Object} params    - input parameter of the function to call
* @param {Object} funAbi    - abi definition of the function to call. null if building data for the ctor.
* @param {Function} callback    - callback
*/
function encodeParams(params, funAbi, callback) {
  return new Promise(function (resolve, reject) {
    var data = '';
    var dataHex = '';
    var funArgs = [];
    if (Array.isArray(params)) {
      funArgs = params;
      if (funArgs.length > 0) {
        try {
          data = (0, _txHelper.encodeParams)(funAbi, funArgs);
          dataHex = data.toString();
        } catch (e) {
          reject('Error encoding arguments: ' + e);
          return callback && callback('Error encoding arguments: ' + e);
        }
      }
      if (data.slice(0, 9) === 'undefined') {
        dataHex = data.slice(9);
      }
      if (data.slice(0, 2) === '0x') {
        dataHex = data.slice(2);
      }
    } else if (params.indexOf('raw:0x') === 0) {
      // in that case we consider that the input is already encoded and *does not* contain the method signature
      dataHex = params.replace('raw:0x', '');
      data = Buffer.from(dataHex, 'hex');
    } else {
      try {
        funArgs = parseFunctionParams(params);
      } catch (e) {
        reject('Error encoding arguments: ' + e);
        return callback && callback('Error encoding arguments: ' + e);
      }
      try {
        if (funArgs.length > 0) {
          data = (0, _txHelper.encodeParams)(funAbi, funArgs);
          dataHex = data.toString();
        }
      } catch (e) {
        reject('Error encoding arguments: ' + e);
        return callback && callback('Error encoding arguments: ' + e);
      }
      if (data.slice(0, 9) === 'undefined') {
        dataHex = data.slice(9);
      }
      if (data.slice(0, 2) === '0x') {
        dataHex = data.slice(2);
      }
    }
    var result = {
      data: data,
      dataHex: dataHex,
      funArgs: funArgs
    };
    callback && callback(null, result);
    resolve(result);
  });
}

/**
* encode function call (function id + encoded parameters)
*
* @param {Object} params    - input parameter of the function to call
* @param {Object} funAbi    - abi definition of the function to call. null if building data for the ctor.
* @param {Function} callback    - callback
*/
function encodeFunctionCall(params, funAbi, callback) {
  encodeParams(params, funAbi, function (error, encodedParam) {
    if (error) return callback(error);
    callback(null, {
      dataHex: (0, _txHelper.encodeFunctionId)(funAbi) + encodedParam.dataHex,
      funAbi: funAbi,
      funArgs: encodedParam.funArgs
    });
  });
}

/**
* encode constructor creation and link with provided libraries if needed
*
* @param {Object} contract    - input parameter of the function to call
* @param {Object} params    - input parameter of the function to call
* @param {Object} funAbi    - abi definition of the function to call. null if building data for the ctor.
* @param {Object} linkLibraries    - contains {linkReferences} object which list all the addresses to be linked
* @param {Object} linkReferences    - given by the compiler, contains the proper linkReferences
* @param {Function} callback    - callback
*/
function encodeConstructorCallAndLinkLibraries(contract, params, funAbi, linkLibrariesAddresses, linkReferences, callback) {
  encodeParams(params, funAbi, function (error, encodedParam) {
    if (error) return callback(error);
    linkLibraries(contract, linkLibrariesAddresses, linkReferences, function (error, bytecodeToDeploy) {
      callback(error, {
        dataHex: bytecodeToDeploy + encodedParam.dataHex,
        funAbi: funAbi,
        funArgs: encodedParam.funArgs,
        contractBytecode: contract.evm.bytecode.object
      });
    });
  });
}

/**
* link with provided libraries if needed
*
* @param {Object} contract    - input parameter of the function to call
* @param {Object} linkLibraries    - contains {linkReferences} object which list all the addresses to be linked
* @param {Object} linkReferences    - given by the compiler, contains the proper linkReferences
* @param {Function} callback    - callback
*/
function linkLibraries(contract, linkLibraries, linkReferences, callback) {
  var bytecodeToDeploy = contract.evm.bytecode.object;
  if (bytecodeToDeploy.indexOf('_') >= 0) {
    if (linkLibraries && linkReferences) {
      for (var libFile in linkLibraries) {
        for (var lib in linkLibraries[libFile]) {
          var address = linkLibraries[libFile][lib];
          if (!(0, _util.isValidAddress)(address)) return callback(address + ' is not a valid address. Please check the provided address is valid.');
          bytecodeToDeploy = linkLibraryStandardFromlinkReferences(lib, address.replace('0x', ''), bytecodeToDeploy, linkReferences);
        }
      }
    }
  }
  if (bytecodeToDeploy.indexOf('_') >= 0) {
    return callback('Failed to link some libraries');
  }
  return callback(null, bytecodeToDeploy);
}

/**
* encode constructor creation and deploy libraries if needed
*
* @param {String} contractName    - current contract name
* @param {Object} contract    - input parameter of the function to call
* @param {Object} contracts    - map of all compiled contracts.
* @param {Object} params    - input parameter of the function to call
* @param {Object} funAbi    - abi definition of the function to call. null if building data for the ctor.
* @param {Function} callback    - callback
* @param {Function} callbackStep  - callbackStep
* @param {Function} callbackDeployLibrary  - callbackDeployLibrary
* @param {Function} callback    - callback
*/
function encodeConstructorCallAndDeployLibraries(contractName, contract, contracts, params, funAbi, callback, callbackStep, callbackDeployLibrary) {
  encodeParams(params, funAbi, function (error, encodedParam) {
    if (error) return callback(error);
    var dataHex = '';
    var contractBytecode = contract.evm.bytecode.object;
    var bytecodeToDeploy = contract.evm.bytecode.object;
    if (bytecodeToDeploy.indexOf('_') >= 0) {
      linkBytecode(contract, contracts, function (err, bytecode) {
        if (err) {
          callback('Error deploying required libraries: ' + err);
        } else {
          bytecodeToDeploy = bytecode + dataHex;
          return callback(null, {
            dataHex: bytecodeToDeploy,
            funAbi: funAbi,
            funArgs: encodedParam.funArgs,
            contractBytecode: contractBytecode,
            contractName: contractName
          });
        }
      }, callbackStep, callbackDeployLibrary);
      return;
    } else {
      dataHex = bytecodeToDeploy + encodedParam.dataHex;
    }
    callback(null, {
      dataHex: bytecodeToDeploy,
      funAbi: funAbi,
      funArgs: encodedParam.funArgs,
      contractBytecode: contractBytecode,
      contractName: contractName
    });
  });
}

/**
* (DEPRECATED) build the transaction data
*
* @param {String} contractName
* @param {Object} contract    - abi definition of the current contract.
* @param {Object} contracts    - map of all compiled contracts.
* @param {Bool} isConstructor    - isConstructor.
* @param {Object} funAbi    - abi definition of the function to call. null if building data for the ctor.
* @param {Object} params    - input parameter of the function to call
* @param {Function} callback    - callback
* @param {Function} callbackStep  - callbackStep
* @param {Function} callbackDeployLibrary  - callbackDeployLibrary
*/
function buildData(contractName, contract, contracts, isConstructor, funAbi, params, callback, callbackStep, callbackDeployLibrary) {
  var funArgs = [];
  var data = '';
  var dataHex = '';
  if (params.indexOf('raw:0x') === 0) {
    // in that case we consider that the input is already encoded and *does not* contain the method signature
    dataHex = params.replace('raw:0x', '');
    data = Buffer.from(dataHex, 'hex');
  } else {
    try {
      if (params.length > 0) {
        funArgs = parseFunctionParams(params);
      }
    } catch (e) {
      return callback('Error encoding arguments: ' + e);
    }
    try {
      data = (0, _txHelper.encodeParams)(funAbi, funArgs);
      dataHex = data.toString();
    } catch (e) {
      return callback('Error encoding arguments: ' + e);
    }
    if (data.slice(0, 9) === 'undefined') {
      dataHex = data.slice(9);
    }
    if (data.slice(0, 2) === '0x') {
      dataHex = data.slice(2);
    }
  }
  var contractBytecode;
  if (isConstructor) {
    contractBytecode = contract.evm.bytecode.object;
    var bytecodeToDeploy = contract.evm.bytecode.object;
    if (bytecodeToDeploy.indexOf('_') >= 0) {
      linkBytecode(contract, contracts, function (err, bytecode) {
        if (err) {
          callback('Error deploying required libraries: ' + err);
        } else {
          bytecodeToDeploy = bytecode + dataHex;
          return callback(null, {
            dataHex: bytecodeToDeploy,
            funAbi: funAbi,
            funArgs: funArgs,
            contractBytecode: contractBytecode,
            contractName: contractName
          });
        }
      }, callbackStep, callbackDeployLibrary);
      return;
    } else {
      dataHex = bytecodeToDeploy + dataHex;
    }
  } else {
    dataHex = (0, _txHelper.encodeFunctionId)(funAbi) + dataHex;
  }
  callback(null, {
    dataHex: dataHex,
    funAbi: funAbi,
    funArgs: funArgs,
    contractBytecode: contractBytecode,
    contractName: contractName
  });
}
function atAddress() {}
function linkBytecodeStandard(contract, contracts, callback, callbackStep, callbackDeployLibrary) {
  var contractBytecode = contract.evm.bytecode.object;
  (0, _async.eachOfSeries)(contract.evm.bytecode.linkReferences, function (libs, file, cbFile) {
    (0, _async.eachOfSeries)(contract.evm.bytecode.linkReferences[file], function (libRef, libName, cbLibDeployed) {
      var library = contracts[file][libName];
      if (library) {
        deployLibrary(file + ':' + libName, libName, library, contracts, function (error, address) {
          if (error) {
            return cbLibDeployed(error);
          }
          var hexAddress = address.toString('hex');
          if (hexAddress.slice(0, 2) === '0x') {
            hexAddress = hexAddress.slice(2);
          }
          contractBytecode = linkLibraryStandard(libName, hexAddress, contractBytecode, contract);
          cbLibDeployed();
        }, callbackStep, callbackDeployLibrary);
      } else {
        //@ts-ignore
        cbLibDeployed('Cannot find compilation data of library ' + libName);
      }
    }, function (error) {
      cbFile(error);
    });
  }, function (error) {
    if (error) {
      callbackStep(error);
    }
    callback(error, contractBytecode);
  });
}
function linkBytecodeLegacy(contract, contracts, callback, callbackStep, callbackDeployLibrary) {
  var libraryRefMatch = contract.evm.bytecode.object.match(/__([^_]{1,36})__/);
  if (!libraryRefMatch) {
    return callback('Invalid bytecode format.');
  }
  var libraryName = libraryRefMatch[1];
  // file_name:library_name
  var libRef = libraryName.match(/(.*):(.*)/);
  if (!libRef) {
    return callback('Cannot extract library reference ' + libraryName);
  }
  if (!contracts[libRef[1]] || !contracts[libRef[1]][libRef[2]]) {
    return callback('Cannot find library reference ' + libraryName);
  }
  var libraryShortName = libRef[2];
  var library = contracts[libRef[1]][libraryShortName];
  if (!library) {
    return callback('Library ' + libraryName + ' not found.');
  }
  deployLibrary(libraryName, libraryShortName, library, contracts, function (err, address) {
    if (err) {
      return callback(err);
    }
    var hexAddress = address.toString('hex');
    if (hexAddress.slice(0, 2) === '0x') {
      hexAddress = hexAddress.slice(2);
    }
    contract.evm.bytecode.object = linkLibrary(libraryName, hexAddress, contract.evm.bytecode.object);
    linkBytecode(contract, contracts, callback, callbackStep, callbackDeployLibrary);
  }, callbackStep, callbackDeployLibrary);
}
function linkBytecode(contract, contracts, callback, callbackStep, callbackDeployLibrary) {
  if (contract.evm.bytecode.object.indexOf('_') < 0) {
    return callback(null, contract.evm.bytecode.object);
  }
  if (contract.evm.bytecode.linkReferences && Object.keys(contract.evm.bytecode.linkReferences).length) {
    linkBytecodeStandard(contract, contracts, callback, callbackStep, callbackDeployLibrary);
  } else {
    linkBytecodeLegacy(contract, contracts, callback, callbackStep, callbackDeployLibrary);
  }
}
function deployLibrary(libraryName, libraryShortName, library, contracts, callback, callbackStep, callbackDeployLibrary) {
  var address = library.address;
  if (address) {
    return callback(null, address);
  }
  var bytecode = library.evm.bytecode.object;
  if (bytecode.indexOf('_') >= 0) {
    linkBytecode(library, contracts, function (err, bytecode) {
      if (err) callback(err);else {
        library.evm.bytecode.object = bytecode;
        deployLibrary(libraryName, libraryShortName, library, contracts, callback, callbackStep, callbackDeployLibrary);
      }
    }, callbackStep, callbackDeployLibrary);
  } else {
    callbackStep("creation of library ".concat(libraryName, " pending..."));
    var data = {
      dataHex: bytecode,
      funAbi: {
        type: 'constructor'
      },
      funArgs: [],
      contractBytecode: bytecode,
      contractName: libraryShortName,
      contractABI: library.abi
    };
    callbackDeployLibrary({
      data: data,
      useCall: false
    }, function (err, txResult) {
      if (err) {
        return callback(err);
      }
      var address = txResult.receipt.contractAddress;
      library.address = address;
      callback(err, address);
    });
  }
}
function linkLibraryStandardFromlinkReferences(libraryName, address, bytecode, linkReferences) {
  for (var file in linkReferences) {
    for (var libName in linkReferences[file]) {
      if (libraryName === libName) {
        bytecode = setLibraryAddress(address, bytecode, linkReferences[file][libName]);
      }
    }
  }
  return bytecode;
}
function linkLibraryStandard(libraryName, address, bytecode, contract) {
  return linkLibraryStandardFromlinkReferences(libraryName, address, bytecode, contract.evm.bytecode.linkReferences);
}
function setLibraryAddress(address, bytecodeToLink, positions) {
  if (positions) {
    var _iterator = _createForOfIteratorHelper(positions),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pos = _step.value;
        var regpos = bytecodeToLink.match(new RegExp("(.{".concat(2 * pos.start, "})(.{").concat(2 * pos.length, "})(.*)")));
        if (regpos) {
          bytecodeToLink = regpos[1] + address + regpos[3];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return bytecodeToLink;
}
function linkLibrary(libraryName, address, bytecodeToLink) {
  return (0, _linker.linkBytecode)(bytecodeToLink, (0, _defineProperty2["default"])({}, libraryName, (0, _util.addHexPrefix)(address)));
}
function decodeResponse(response, fnabi) {
  // Only decode if there supposed to be fields
  if (fnabi.outputs && fnabi.outputs.length > 0) {
    try {
      var i;
      var outputTypes = [];
      for (i = 0; i < fnabi.outputs.length; i++) {
        var type = fnabi.outputs[i].type;
        outputTypes.push(type.indexOf('tuple') === 0 ? (0, _txHelper.makeFullTypeDefinition)(fnabi.outputs[i]) : type);
      }
      if (!response || !response.length) response = new Uint8Array(32 * fnabi.outputs.length); // ensuring the data is at least filled by 0 cause `AbiCoder` throws if there's not enough data
      // decode data
      var abiCoder = new _ethers.ethers.utils.AbiCoder();
      var decodedObj = abiCoder.decode(outputTypes, response);
      var json = {};
      for (i = 0; i < outputTypes.length; i++) {
        var name = fnabi.outputs[i].name;
        json[i] = outputTypes[i] + ': ' + (name ? name + ' ' + decodedObj[i] : decodedObj[i]);
      }
      return json;
    } catch (e) {
      return {
        error: 'Failed to decode output: ' + e
      };
    }
  }
  return {};
}
function parseFunctionParams(params) {
  var args = [];
  // Check if parameter string starts with array or string
  var startIndex = isArrayOrStringStart(params, 0) ? -1 : 0;
  for (var i = 0; i < params.length; i++) {
    // If a quote is received
    if (params.charAt(i) === '"') {
      startIndex = -1;
      var endQuoteIndex = false;
      // look for closing quote. On success, push the complete string in arguments list
      for (var j = i + 1; !endQuoteIndex; j++) {
        if (params.charAt(j) === '"') {
          args.push(normalizeParam(params.substring(i + 1, j)));
          endQuoteIndex = true;
          i = j;
        }
        // Throw error if end of params string is arrived but couldn't get end quote
        if (!endQuoteIndex && j === params.length - 1) {
          throw new Error('invalid params');
        }
      }
    } else if (params.charAt(i) === '[') {
      // If an array/struct opening bracket is received
      startIndex = -1;
      var bracketCount = 1;
      var _j = void 0;
      for (_j = i + 1; bracketCount !== 0; _j++) {
        // Increase count if another array opening bracket is received (To handle nested array)
        if (params.charAt(_j) === '[') {
          bracketCount++;
        } else if (params.charAt(_j) === ']') {
          // // Decrease count if an array closing bracket is received (To handle nested array)
          bracketCount--;
        }
        // Throw error if end of params string is arrived but couldn't get end of tuple
        if (bracketCount !== 0 && _j === params.length - 1) {
          throw new Error('invalid tuple params');
        }
        if (bracketCount === 0) break;
      }
      args.push(parseFunctionParams(params.substring(i + 1, _j)));
      i = _j - 1;
    } else if (params.charAt(i) === ',' || i === params.length - 1) {
      // , or end of string
      // if startIndex >= 0, it means a parameter was being parsed, it can be first or other parameter
      if (startIndex >= 0) {
        var param = params.substring(startIndex, i === params.length - 1 ? undefined : i);
        param = normalizeParam(param);
        args.push(param);
      }
      // Register start index of a parameter to parse
      startIndex = isArrayOrStringStart(params, i + 1) ? -1 : i + 1;
    }
  }
  return args;
}
var normalizeParam = function normalizeParam(param) {
  param = param.trim();
  if (param.startsWith('0x')) param = "".concat(param);
  if (/[0-9]/g.test(param)) param = "".concat(param);

  // fromExponential
  if (!param.startsWith('0x')) {
    var regSci = REGEX_SCIENTIFIC.exec(param);
    var exponents = regSci ? regSci[2] : null;
    if (regSci && REGEX_DECIMAL.exec(exponents)) {
      try {
        var paramTrimmed = param.replace(/^'/g, '').replace(/'$/g, '');
        paramTrimmed = paramTrimmed.replace(/^"/g, '').replace(/"$/g, '');
        param = (0, _fromExponential["default"])(paramTrimmed);
      } catch (e) {
        console.log(e);
      }
    }
  }
  if (typeof param === 'string') {
    if (param === 'true') param = true;
    if (param === 'false') param = false;
  }
  return param;
};
exports.normalizeParam = normalizeParam;
var REGEX_SCIENTIFIC = /^-?(\d+\.?\d*)e\d*(\d+)$/;
exports.REGEX_SCIENTIFIC = REGEX_SCIENTIFIC;
var REGEX_DECIMAL = /^\d*/;
exports.REGEX_DECIMAL = REGEX_DECIMAL;
function isArrayOrStringStart(str, index) {
  return str.charAt(index) === '"' || str.charAt(index) === '[';
}

/***/ }),

/***/ 15642:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.encodeFunctionId = encodeFunctionId;
exports.encodeParams = encodeParams;
exports.extractSize = extractSize;
exports.getConstructorInterface = getConstructorInterface;
exports.getContract = getContract;
exports.getFallbackInterface = getFallbackInterface;
exports.getFunction = getFunction;
exports.getFunctionFragment = getFunctionFragment;
exports.getFunctionLiner = getFunctionLiner;
exports.getReceiveInterface = getReceiveInterface;
exports.inputParametersDeclarationToString = inputParametersDeclarationToString;
exports.makeFullTypeDefinition = makeFullTypeDefinition;
exports.serializeInputs = serializeInputs;
exports.sortAbiFunction = sortAbiFunction;
exports.visitContracts = visitContracts;
var _ethers = __webpack_require__(55065);
function makeFullTypeDefinition(typeDef) {
  if (typeDef && typeDef.type.indexOf('tuple') === 0 && typeDef.components) {
    var innerTypes = typeDef.components.map(function (innerType) {
      return makeFullTypeDefinition(innerType);
    });
    return "tuple(".concat(innerTypes.join(','), ")").concat(extractSize(typeDef.type));
  }
  return typeDef.type;
}
function encodeParams(funABI, args) {
  var types = [];
  if (funABI.inputs && funABI.inputs.length) {
    for (var i = 0; i < funABI.inputs.length; i++) {
      var type = funABI.inputs[i].type;
      if (type === 'bool') {
        if (args[i] === false || args[i] === 'false' || args[i] === '0' || args[i] === 0) args[i] = false;else if (args[i] === true || args[i] === 'true' || args[i] === '1' || args[i] === 1) args[i] = true;else throw new Error("provided value for boolean is invalid: ".concat(args[i]));
      }
      types.push(type.indexOf('tuple') === 0 ? makeFullTypeDefinition(funABI.inputs[i]) : type);
      if (args.length < types.length) {
        args.push('');
      }
    }
  }

  // NOTE: the caller will concatenate the bytecode and this
  //       it could be done here too for consistency
  var abiCoder = new _ethers.ethers.utils.AbiCoder();
  return abiCoder.encode(types, args);
}
function encodeFunctionId(funABI) {
  if (funABI.type === 'fallback' || funABI.type === 'receive') return '0x';
  var abi = new _ethers.ethers.utils.Interface([funABI]);
  return abi.getSighash(funABI.name);
}
function getFunctionFragment(funABI) {
  if (funABI.type === 'fallback' || funABI.type === 'receive') return null;
  return new _ethers.ethers.utils.Interface([funABI]);
}
function sortAbiFunction(contractabi) {
  // Check if function is constant (introduced with Solidity 0.6.0)
  var isConstant = function isConstant(_ref) {
    var stateMutability = _ref.stateMutability;
    return stateMutability === 'view' || stateMutability === 'pure';
  };
  // Sorts the list of ABI entries. Constant functions will appear first,
  // followed by non-constant functions. Within those t wo groupings, functions
  // will be sorted by their names.
  return contractabi.sort(function (a, b) {
    if (isConstant(a) && !isConstant(b)) {
      return 1;
    } else if (isConstant(b) && !isConstant(a)) {
      return -1;
    }
    // If we reach here, either a and b are both constant or both not; sort by name then
    // special case for fallback, receive and constructor function
    if (a.type === 'function' && typeof a.name !== 'undefined') {
      return a.name.localeCompare(b.name);
    } else if (a.type === 'constructor' || a.type === 'fallback' || a.type === 'receive') {
      return 1;
    }
  });
}
function getConstructorInterface(abi) {
  var funABI = {
    name: '',
    inputs: [],
    type: 'constructor',
    payable: false,
    outputs: []
  };
  if (typeof abi === 'string') {
    try {
      abi = JSON.parse(abi);
    } catch (e) {
      console.log('exception retrieving ctor abi ' + abi);
      return funABI;
    }
  }
  for (var i = 0; i < abi.length; i++) {
    if (abi[i].type === 'constructor') {
      funABI.inputs = abi[i].inputs || [];
      funABI.payable = abi[i].payable;
      funABI['stateMutability'] = abi[i].stateMutability;
      break;
    }
  }
  return funABI;
}
function serializeInputs(fnAbi) {
  var serialized = '(';
  if (fnAbi.inputs && fnAbi.inputs.length) {
    serialized += fnAbi.inputs.map(function (input) {
      return input.type;
    }).join(',');
  }
  serialized += ')';
  return serialized;
}
function extractSize(type) {
  var size = type.match(/([a-zA-Z0-9])(\[.*\])/);
  return size ? size[2] : '';
}
function getFunctionLiner(fn) {
  var detailTuple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  /*
    if detailsTuple is True, this will return something like fnName((uint, string))
    if detailsTuple is False, this will return something like fnName(tuple)
  */
  return fn.name + '(' + fn.inputs.map(function (value) {
    if (detailTuple && value.components) {
      var fullType = makeFullTypeDefinition(value);
      return fullType.replace(/tuple/g, ''); // return of makeFullTypeDefinition might contain `tuple`, need to remove it cause `methodIdentifier` (fnName) does not include `tuple` keyword
    } else {
      return value.type;
    }
  }).join(',') + ')';
}
function getFunction(abi, fnName) {
  for (var i = 0; i < abi.length; i++) {
    var fn = abi[i];
    if (fn.type === 'function' && (fnName === getFunctionLiner(fn, true) || fnName === getFunctionLiner(fn, false))) {
      return fn;
    }
  }
  return null;
}
function getFallbackInterface(abi) {
  for (var i = 0; i < abi.length; i++) {
    if (abi[i].type === 'fallback') {
      return abi[i];
    }
  }
}
function getReceiveInterface(abi) {
  for (var i = 0; i < abi.length; i++) {
    if (abi[i].type === 'receive') {
      return abi[i];
    }
  }
}

/**
  * return the contract obj of the given @arg name. Uses last compilation result.
  * return null if not found
  * @param {String} name    - contract name
  * @returns contract obj and associated file: { contract, file } or null
  */
function getContract(contractName, contracts) {
  for (var file in contracts) {
    if (contracts[file][contractName]) {
      return {
        object: contracts[file][contractName],
        file: file
      };
    }
  }
  return null;
}

/**
  * call the given @arg cb (function) for all the contracts. Uses last compilation result
  * stop visiting when cb return true
  * @param {Function} cb    - callback
  */
function visitContracts(contracts, cb) {
  for (var file in contracts) {
    for (var name in contracts[file]) {
      if (cb({
        name: name,
        object: contracts[file][name],
        file: file
      })) return;
    }
  }
}
function inputParametersDeclarationToString(abiinputs) {
  var inputs = (abiinputs || []).map(function (inp) {
    return inp.type + ' ' + inp.name;
  });
  return inputs.join(', ');
}

/***/ }),

/***/ 31274:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TxListener = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(59454));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(91544));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(32830));
var _createClass2 = _interopRequireDefault(__webpack_require__(59152));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var _ethers = __webpack_require__(55065);
var _util = __webpack_require__(35178);
var _eventManager = __webpack_require__(14829);
var _util2 = __webpack_require__(90434);
var _txFormat = __webpack_require__(69572);
var _txHelper = __webpack_require__(15642);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function addExecutionCosts(txResult, tx, execResult) {
  if (txResult) {
    if (execResult) {
      tx.returnValue = execResult.returnValue;
      if (execResult.executionGasUsed) tx.executionCost = execResult.executionGasUsed.toString(10);
    }
    if (txResult.receipt && txResult.receipt.gasUsed) tx.transactionCost = txResult.receipt.gasUsed.toString(10);
  }
}

/**
  * poll web3 each 2s if web3
  * listen on transaction executed event if VM
  * attention: blocks returned by the event `newBlock` have slightly different json properties whether web3 or the VM is used
  * trigger 'newBlock'
  *
  */
var TxListener = /*#__PURE__*/function () {
  function TxListener(opt, executionContext) {
    var _this = this;
    (0, _classCallCheck2["default"])(this, TxListener);
    (0, _defineProperty2["default"])(this, "event", void 0);
    (0, _defineProperty2["default"])(this, "executionContext", void 0);
    (0, _defineProperty2["default"])(this, "_resolvedTransactions", void 0);
    (0, _defineProperty2["default"])(this, "_api", void 0);
    (0, _defineProperty2["default"])(this, "_resolvedContracts", void 0);
    (0, _defineProperty2["default"])(this, "_isListening", void 0);
    (0, _defineProperty2["default"])(this, "_listenOnNetwork", void 0);
    (0, _defineProperty2["default"])(this, "_loopId", void 0);
    (0, _defineProperty2["default"])(this, "blocks", void 0);
    this.event = new _eventManager.EventManager();
    // has a default for now for backwards compatibility
    this.executionContext = executionContext;
    this._api = opt.api;
    this._resolvedTransactions = {};
    this._resolvedContracts = {};
    this._isListening = false;
    this._listenOnNetwork = false;
    this._loopId = null;
    this.init();
    this.executionContext.event.register('contextChanged', function (context) {
      if (_this._isListening) {
        _this.stopListening();
        _this.startListening();
      }
    });
    opt.event.udapp.register('callExecuted', /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(error, from, to, data, lookupOnly, txResult) {
        var returnValue, execResult, call;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!error) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                if (_this._isListening) {
                  _context.next = 4;
                  break;
                }
                return _context.abrupt("return");
              case 4:
                if (!_this._loopId) {
                  _context.next = 6;
                  break;
                }
                return _context.abrupt("return");
              case 6:
                if (!_this.executionContext.isVM()) {
                  _context.next = 13;
                  break;
                }
                _context.next = 9;
                return _this.executionContext.web3().remix.getExecutionResultFromSimulator(txResult.transactionHash);
              case 9:
                execResult = _context.sent;
                returnValue = (0, _util.toBytes)(execResult.returnValue);
                _context.next = 14;
                break;
              case 13:
                returnValue = (0, _util.toBytes)((0, _util.addHexPrefix)(txResult.result));
              case 14:
                call = {
                  from: from,
                  to: to,
                  input: data,
                  hash: txResult.transactionHash ? txResult.transactionHash : 'call' + (from || '') + to + data,
                  isCall: true,
                  returnValue: returnValue,
                  envMode: _this.executionContext.getProvider()
                };
                addExecutionCosts(txResult, call, execResult);
                _this._resolveTx(call, call, function (error, resolvedData) {
                  if (!error) {
                    _this.event.trigger('newCall', [call]);
                  }
                });
              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function (_x, _x2, _x3, _x4, _x5, _x6) {
        return _ref.apply(this, arguments);
      };
    }());
    opt.event.udapp.register('transactionExecuted', function (error, from, to, data, lookupOnly, txResult) {
      if (error) return;
      if (lookupOnly) return;
      // we go for that case if
      // in VM mode
      // in web3 mode && listen remix txs only
      if (!_this._isListening) return; // we don't listen
      if (_this._loopId) return; // we seems to already listen on a "web3" network
      _this.executionContext.web3().eth.getTransaction(txResult.transactionHash).then( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(tx) {
          var execResult;
          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!_this.executionContext.isVM()) {
                    _context2.next = 4;
                    break;
                  }
                  _context2.next = 3;
                  return _this.executionContext.web3().remix.getExecutionResultFromSimulator(txResult.transactionHash);
                case 3:
                  execResult = _context2.sent;
                case 4:
                  addExecutionCosts(txResult, tx, execResult);
                  tx.envMode = _this.executionContext.getProvider();
                  tx.status = txResult.receipt.status;
                  _this._resolve([tx]);
                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return function (_x7) {
          return _ref2.apply(this, arguments);
        };
      }())["catch"](function (error) {
        return console.log(error);
      });
    });
  }

  /**
    * define if txlistener should listen on the network or if only tx created from remix are managed
    *
    * @param {Bool} type - true if listen on the network
    */
  (0, _createClass2["default"])(TxListener, [{
    key: "setListenOnNetwork",
    value: function setListenOnNetwork(listenOnNetwork) {
      this._listenOnNetwork = listenOnNetwork;
      if (this._loopId) {
        clearInterval(this._loopId);
      }
      this._listenOnNetwork ? this.startListening() : this.stopListening();
    }

    /**
      * reset recorded transactions
      */
  }, {
    key: "init",
    value: function init() {
      this.blocks = [];
    }

    /**
      * start listening for incoming transactions
      *
      * @param {String} type - type/name of the provider to add
      * @param {Object} obj  - provider
      */
  }, {
    key: "startListening",
    value: function startListening() {
      this.init();
      this._isListening = true;
      if (this._listenOnNetwork && !this.executionContext.isVM()) {
        this._startListenOnNetwork();
      }
    }

    /**
      * stop listening for incoming transactions. do not reset the recorded pool.
      *
      * @param {String} type - type/name of the provider to add
      * @param {Object} obj  - provider
      */
  }, {
    key: "stopListening",
    value: function stopListening() {
      if (this._loopId) {
        clearInterval(this._loopId);
      }
      this._loopId = null;
      this._isListening = false;
    }
  }, {
    key: "_startListenOnNetwork",
    value: function () {
      var _startListenOnNetwork2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _this$executionContex,
          _this2 = this;
        var lastSeenBlock, processingBlock, processBlocks;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                lastSeenBlock = ((_this$executionContex = this.executionContext.lastBlock) == null ? void 0 : _this$executionContex.number) - BigInt(1);
                processingBlock = false;
                processBlocks = /*#__PURE__*/function () {
                  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
                    var _this2$executionConte2;
                    var currentLoopId, _this2$executionConte, current;
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (_this2._isListening) {
                              _context3.next = 2;
                              break;
                            }
                            return _context3.abrupt("return");
                          case 2:
                            if (!processingBlock) {
                              _context3.next = 4;
                              break;
                            }
                            return _context3.abrupt("return");
                          case 4:
                            processingBlock = true;
                            currentLoopId = _this2._loopId;
                            if (!(_this2._loopId === null)) {
                              _context3.next = 9;
                              break;
                            }
                            processingBlock = false;
                            return _context3.abrupt("return");
                          case 9:
                            if (lastSeenBlock) {
                              _context3.next = 14;
                              break;
                            }
                            lastSeenBlock = (_this2$executionConte = _this2.executionContext.lastBlock) == null ? void 0 : _this2$executionConte.number; // trying to resynchronize
                            console.log('listen on blocks, resynchronising');
                            processingBlock = false;
                            return _context3.abrupt("return");
                          case 14:
                            current = (_this2$executionConte2 = _this2.executionContext.lastBlock) == null ? void 0 : _this2$executionConte2.number;
                            if (current) {
                              _context3.next = 19;
                              break;
                            }
                            console.log(new Error('no last block found'));
                            processingBlock = false;
                            return _context3.abrupt("return");
                          case 19:
                            if (!(currentLoopId === _this2._loopId && lastSeenBlock < current)) {
                              _context3.next = 35;
                              break;
                            }
                          case 20:
                            if (!(lastSeenBlock <= current)) {
                              _context3.next = 34;
                              break;
                            }
                            _context3.prev = 21;
                            if (_this2._isListening) {
                              _context3.next = 24;
                              break;
                            }
                            return _context3.abrupt("break", 34);
                          case 24:
                            _context3.next = 26;
                            return _this2._manageBlock(lastSeenBlock);
                          case 26:
                            _context3.next = 31;
                            break;
                          case 28:
                            _context3.prev = 28;
                            _context3.t0 = _context3["catch"](21);
                            console.log(_context3.t0);
                          case 31:
                            lastSeenBlock++;
                            _context3.next = 20;
                            break;
                          case 34:
                            lastSeenBlock = current;
                          case 35:
                            processingBlock = false;
                          case 36:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, null, [[21, 28]]);
                  }));
                  return function processBlocks() {
                    return _ref3.apply(this, arguments);
                  };
                }();
                this._loopId = setInterval(processBlocks, 20000);
                processBlocks();
              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function _startListenOnNetwork() {
        return _startListenOnNetwork2.apply(this, arguments);
      }
      return _startListenOnNetwork;
    }()
  }, {
    key: "_manageBlock",
    value: function () {
      var _manageBlock2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(blockNumber) {
        var result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.executionContext.web3().eth.getBlock(blockNumber, true);
              case 3:
                result = _context5.sent;
                _context5.next = 6;
                return this._newBlock(Object.assign({
                  type: 'web3'
                }, result));
              case 6:
                return _context5.abrupt("return", _context5.sent);
              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 9]]);
      }));
      function _manageBlock(_x8) {
        return _manageBlock2.apply(this, arguments);
      }
      return _manageBlock;
    }()
    /**
      * try to resolve the contract name from the given @arg address
      *
      * @param {String} address - contract address to resolve
      * @return {String} - contract name
      */
  }, {
    key: "resolvedContract",
    value: function resolvedContract(address) {
      if (this._resolvedContracts[address]) return this._resolvedContracts[address].name;
      return null;
    }

    /**
      * try to resolve the transaction from the given @arg txHash
      *
      * @param {String} txHash - contract address to resolve
      * @return {String} - contract name
      */
  }, {
    key: "resolvedTransaction",
    value: function resolvedTransaction(txHash) {
      return this._resolvedTransactions[txHash];
    }
  }, {
    key: "_newBlock",
    value: function () {
      var _newBlock2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(block) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.blocks.push(block);
                _context6.next = 3;
                return this._resolve(block.transactions);
              case 3:
                this.event.trigger('newBlock', [block]);
              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function _newBlock(_x9) {
        return _newBlock2.apply(this, arguments);
      }
      return _newBlock;
    }()
  }, {
    key: "_resolveAsync",
    value: function _resolveAsync(tx) {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        _this3._api.resolveReceipt(tx, function (error, receipt) {
          if (error) return reject(error);
          _this3._resolveTx(tx, receipt, function (error, resolvedData) {
            if (error) return reject(error);
            if (resolvedData) {
              _this3.event.trigger('txResolved', [tx, receipt, resolvedData]);
            }
            _this3.event.trigger('newTransaction', [tx, receipt]);
            resolve({});
          });
        });
      });
    }
  }, {
    key: "_resolve",
    value: function () {
      var _resolve2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(transactions) {
        var _iterator, _step, tx;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _iterator = _createForOfIteratorHelper(transactions);
                _context7.prev = 1;
                _iterator.s();
              case 3:
                if ((_step = _iterator.n()).done) {
                  _context7.next = 16;
                  break;
                }
                tx = _step.value;
                _context7.prev = 5;
                if (this._isListening) {
                  _context7.next = 8;
                  break;
                }
                return _context7.abrupt("break", 16);
              case 8:
                _context7.next = 10;
                return this._resolveAsync(tx);
              case 10:
                _context7.next = 14;
                break;
              case 12:
                _context7.prev = 12;
                _context7.t0 = _context7["catch"](5);
              case 14:
                _context7.next = 3;
                break;
              case 16:
                _context7.next = 21;
                break;
              case 18:
                _context7.prev = 18;
                _context7.t1 = _context7["catch"](1);
                _iterator.e(_context7.t1);
              case 21:
                _context7.prev = 21;
                _iterator.f();
                return _context7.finish(21);
              case 24:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 18, 21, 24], [5, 12]]);
      }));
      function _resolve(_x10) {
        return _resolve2.apply(this, arguments);
      }
      return _resolve;
    }()
  }, {
    key: "_resolveTx",
    value: function _resolveTx(tx, receipt, cb) {
      var _this4 = this;
      var contracts = this._api.contracts();
      if (!contracts) return cb();
      var fun;
      var contract;
      if (!tx.to || tx.to === '0x0') {
        // testrpc returns 0x0 in that case
        // contract creation / resolve using the creation bytes code
        // if web3: we have to call getTransactionReceipt to get the created address
        // if VM: created address already included
        var code = tx.input;
        contract = this._tryResolveContract(code, contracts, true);
        if (contract) {
          var address = receipt.contractAddress;
          this._resolvedContracts[address] = contract;
          fun = this._resolveFunction(contract, tx, true);
          if (this._resolvedTransactions[tx.hash]) {
            this._resolvedTransactions[tx.hash].contractAddress = address;
          }
          return cb(null, {
            to: null,
            contractName: contract.name,
            "function": fun,
            creationAddress: address
          });
        }
        return cb();
      } else {
        // first check known contract, resolve against the `runtimeBytecode` if not known
        contract = this._resolvedContracts[tx.to];
        if (!contract) {
          this.executionContext.web3().eth.getCode(tx.to).then(function (code) {
            if (code) {
              var _contract = _this4._tryResolveContract(code, contracts, false);
              if (_contract) {
                _this4._resolvedContracts[tx.to] = _contract;
                var _fun = _this4._resolveFunction(_contract, tx, false);
                return cb(null, {
                  to: tx.to,
                  contractName: _contract.name,
                  "function": _fun
                });
              }
            }
            return cb();
          })["catch"](function (error) {
            return cb(error);
          });
          return;
        }
        if (contract) {
          fun = this._resolveFunction(contract, tx, false);
          return cb(null, {
            to: tx.to,
            contractName: contract.name,
            "function": fun
          });
        }
        return cb();
      }
    }
  }, {
    key: "_resolveFunction",
    value: function _resolveFunction(contract, tx, isCtor) {
      if (!contract) {
        console.log('txListener: cannot resolve contract - contract is null');
        return;
      }
      var abi = contract.object.abi;
      var inputData = tx.input.replace('0x', '');
      if (!isCtor) {
        var methodIdentifiers = contract.object.evm.methodIdentifiers;
        for (var fn in methodIdentifiers) {
          if (methodIdentifiers[fn] === inputData.substring(0, 8)) {
            var fnabi = (0, _txHelper.getFunction)(abi, fn);
            this._resolvedTransactions[tx.hash] = {
              contractName: contract.name,
              to: tx.to,
              fn: fn,
              params: this._decodeInputParams(inputData.substring(8), fnabi)
            };
            if (tx.returnValue) {
              this._resolvedTransactions[tx.hash].decodedReturnValue = (0, _txFormat.decodeResponse)(tx.returnValue, fnabi);
            }
            return this._resolvedTransactions[tx.hash];
          }
        }
        // receive function
        if (!inputData && (0, _txHelper.getReceiveInterface)(abi)) {
          this._resolvedTransactions[tx.hash] = {
            contractName: contract.name,
            to: tx.to,
            fn: '(receive)',
            params: null
          };
        } else {
          // fallback function
          this._resolvedTransactions[tx.hash] = {
            contractName: contract.name,
            to: tx.to,
            fn: '(fallback)',
            params: null
          };
        }
      } else {
        var bytecode = contract.object.evm.bytecode.object;
        var params = null;
        if (bytecode && bytecode.length) {
          params = this._decodeInputParams((0, _util2.getinputParameters)(inputData), (0, _txHelper.getConstructorInterface)(abi));
        }
        this._resolvedTransactions[tx.hash] = {
          contractName: contract.name,
          to: null,
          fn: '(constructor)',
          params: params
        };
      }
      return this._resolvedTransactions[tx.hash];
    }
  }, {
    key: "_tryResolveContract",
    value: function _tryResolveContract(codeToResolve, compiledContracts, isCreation) {
      var found = null;
      (0, _txHelper.visitContracts)(compiledContracts, function (contract) {
        var bytes = isCreation ? contract.object.evm.bytecode.object : contract.object.evm.deployedBytecode.object;
        if ((0, _util2.compareByteCode)(codeToResolve, '0x' + bytes)) {
          found = contract;
          return true;
        }
      });
      return found;
    }
  }, {
    key: "_decodeInputParams",
    value: function _decodeInputParams(data, abi) {
      data = (0, _util.toBytes)((0, _util.addHexPrefix)(data));
      if (!data.length) data = new Uint8Array(32 * abi.inputs.length); // ensuring the data is at least filled by 0 cause `AbiCoder` throws if there's not enough data

      var inputTypes = [];
      for (var i = 0; i < abi.inputs.length; i++) {
        var type = abi.inputs[i].type;
        inputTypes.push(type.indexOf('tuple') === 0 ? (0, _txHelper.makeFullTypeDefinition)(abi.inputs[i]) : type);
      }
      var abiCoder = new _ethers.ethers.utils.AbiCoder();
      var decoded = abiCoder.decode(inputTypes, data);
      var ret = {};
      for (var k in abi.inputs) {
        ret[abi.inputs[k].type + ' ' + abi.inputs[k].name] = decoded[k];
      }
      return ret;
    }
  }]);
  return TxListener;
}();
exports.TxListener = TxListener;

/***/ }),

/***/ 92136:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TxRunner = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(32830));
var _createClass2 = _interopRequireDefault(__webpack_require__(59152));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var _eventManager = __webpack_require__(14829);
var TxRunner = /*#__PURE__*/function () {
  function TxRunner(internalRunner, opt) {
    (0, _classCallCheck2["default"])(this, TxRunner);
    (0, _defineProperty2["default"])(this, "event", void 0);
    (0, _defineProperty2["default"])(this, "pendingTxs", void 0);
    (0, _defineProperty2["default"])(this, "queusTxs", void 0);
    (0, _defineProperty2["default"])(this, "opt", void 0);
    (0, _defineProperty2["default"])(this, "internalRunner", void 0);
    this.opt = opt || {};
    this.internalRunner = internalRunner;
    this.event = new _eventManager.EventManager();
    this.pendingTxs = {};
    this.queusTxs = [];
  }
  (0, _createClass2["default"])(TxRunner, [{
    key: "rawRun",
    value: function rawRun(args, confirmationCb, gasEstimationForceSend, promptCb, cb) {
      run(this, args, args.timestamp || Date.now(), confirmationCb, gasEstimationForceSend, promptCb, cb);
    }
  }, {
    key: "execute",
    value: function execute(args, confirmationCb, gasEstimationForceSend, promptCb, callback) {
      var data = args.data;
      if (data.slice(0, 2) !== '0x') {
        data = '0x' + data;
      }
      this.internalRunner.execute(args, confirmationCb, gasEstimationForceSend, promptCb, callback);
    }
  }]);
  return TxRunner;
}();
exports.TxRunner = TxRunner;
function run(self, tx, stamp, confirmationCb) {
  var gasEstimationForceSend = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var promptCb = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var callback = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
  if (Object.keys(self.pendingTxs).length) {
    return self.queusTxs.push({
      tx: tx,
      stamp: stamp,
      confirmationCb: confirmationCb,
      gasEstimationForceSend: gasEstimationForceSend,
      promptCb: promptCb,
      callback: callback
    });
  }
  self.pendingTxs[stamp] = tx;
  self.execute(tx, confirmationCb, gasEstimationForceSend, promptCb, function (error, result) {
    delete self.pendingTxs[stamp];
    if (callback && typeof callback === 'function') callback(error, result);
    if (self.queusTxs.length) {
      var next = self.queusTxs.pop();
      run(self, next.tx, next.stamp, next.confirmationCb, next.gasEstimationForceSend, next.promptCb, next.callback);
    }
  });
}

/***/ }),

/***/ 51416:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(40144)["Buffer"];


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TxRunnerVM = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(59454));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(91544));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(32830));
var _createClass2 = _interopRequireDefault(__webpack_require__(59152));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var _common = __webpack_require__(57552);
var _tx = __webpack_require__(20401);
var _block = __webpack_require__(91402);
var _util = __webpack_require__(35178);
var _eventManager = __webpack_require__(14829);
var _logsManager = __webpack_require__(9531);
var TxRunnerVM = /*#__PURE__*/function () {
  function TxRunnerVM(vmaccounts, api, getVMObject) {
    var blocks = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    (0, _classCallCheck2["default"])(this, TxRunnerVM);
    (0, _defineProperty2["default"])(this, "event", void 0);
    (0, _defineProperty2["default"])(this, "blockNumber", void 0);
    (0, _defineProperty2["default"])(this, "pendingTxs", void 0);
    (0, _defineProperty2["default"])(this, "vmaccounts", void 0);
    (0, _defineProperty2["default"])(this, "queusTxs", void 0);
    (0, _defineProperty2["default"])(this, "blocks", void 0);
    (0, _defineProperty2["default"])(this, "logsManager", void 0);
    (0, _defineProperty2["default"])(this, "commonContext", void 0);
    (0, _defineProperty2["default"])(this, "blockParentHash", void 0);
    (0, _defineProperty2["default"])(this, "nextNonceForCall", void 0);
    (0, _defineProperty2["default"])(this, "standaloneTx", void 0);
    (0, _defineProperty2["default"])(this, "getVMObject", void 0);
    this.event = new _eventManager.EventManager();
    this.logsManager = new _logsManager.LogsManager();
    // has a default for now for backwards compatibility
    this.getVMObject = getVMObject;
    this.commonContext = this.getVMObject().common;
    this.pendingTxs = {};
    this.vmaccounts = vmaccounts;
    this.queusTxs = [];
    /*
      txHash is generated using the nonce,
      in order to have unique transaction hash, we need to keep using different nonce (in case of a call)
      so we increment this value after each call.
      For this to function we also need to skip nonce validation, in the vm: `{ skipNonce: true }`
    */
    this.nextNonceForCall = 0;
    var vm = this.getVMObject().vm;
    if (Array.isArray(blocks) && (blocks || []).length > 0) {
      var lastBlock = _block.Block.fromRLPSerializedBlock(blocks[blocks.length - 1], {
        common: this.commonContext
      });
      this.blockParentHash = lastBlock.hash();
      this.blocks = blocks;
    } else {
      this.blockParentHash = vm.blockchain.genesisBlock.hash();
      this.blocks = [vm.blockchain.genesisBlock.serialize()];
    }
  }
  (0, _createClass2["default"])(TxRunnerVM, [{
    key: "execute",
    value: function execute(args, confirmationCb, gasEstimationForceSend, promptCb, callback) {
      var data = args.data;
      if (data.slice(0, 2) !== '0x') {
        data = '0x' + data;
      }
      try {
        this.runInVm(args.from, args.to, data, args.value, args.gasLimit, args.useCall, callback);
      } catch (e) {
        callback(e, null);
      }
    }
  }, {
    key: "runInVm",
    value: function () {
      var _runInVm = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(from, to, data, value, gasLimit, useCall, callback) {
        var _this = this;
        var account, res, EIP1559, tx, coinbases, difficulties, difficulty, block, root;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!from && useCall && Object.keys(this.vmaccounts).length) {
                  from = Object.keys(this.vmaccounts)[0];
                  account = this.vmaccounts[from];
                } else account = this.vmaccounts[from];
                if (account) {
                  _context3.next = 3;
                  break;
                }
                return _context3.abrupt("return", callback('Invalid account selected'));
              case 3:
                _context3.prev = 3;
                _context3.next = 6;
                return this.getVMObject().stateManager.getAccount(_util.Address.fromString(from));
              case 6:
                res = _context3.sent;
                EIP1559 = this.commonContext.hardfork() !== 'berlin'; // berlin is the only pre eip1559 fork that we handle.
                if (!EIP1559) {
                  tx = _tx.LegacyTransaction.fromTxData({
                    nonce: useCall ? this.nextNonceForCall : res.nonce,
                    gasPrice: '0x1',
                    gasLimit: gasLimit,
                    to: to,
                    value: value,
                    data: (0, _util.hexToBytes)(data)
                  }, {
                    common: this.commonContext
                  }).sign(account.privateKey);
                } else {
                  tx = _tx.FeeMarketEIP1559Transaction.fromTxData({
                    nonce: useCall ? this.nextNonceForCall : res.nonce,
                    maxPriorityFeePerGas: '0x01',
                    maxFeePerGas: '0x7',
                    gasLimit: gasLimit,
                    to: to,
                    value: value,
                    data: (0, _util.hexToBytes)(data)
                  }).sign(account.privateKey);
                }
                if (useCall) this.nextNonceForCall++;
                coinbases = ['0x0e9281e9c6a0808672eaba6bd1220e144c9bb07a', '0x8945a1288dc78a6d8952a92c77aee6730b414778', '0x94d76e24f818426ae84aa404140e8d5f60e10e7e'];
                difficulties = [69762765929000, 70762765929000, 71762765929000];
                difficulty = this.commonContext.consensusType() === _common.ConsensusType.ProofOfStake ? 0 : difficulties[this.blocks.length % difficulties.length];
                block = _block.Block.fromBlockData({
                  header: {
                    timestamp: new Date().getTime() / 1000 | 0,
                    number: this.blocks.length,
                    coinbase: coinbases[this.blocks.length % coinbases.length],
                    difficulty: difficulty,
                    gasLimit: gasLimit,
                    baseFeePerGas: EIP1559 ? '0x1' : undefined,
                    parentHash: this.blockParentHash
                  },
                  transactions: [tx]
                }, {
                  common: this.commonContext
                }); // standaloneTx represents a gas estimation call
                if (!(this.standaloneTx || useCall)) {
                  _context3.next = 21;
                  break;
                }
                _context3.next = 17;
                return this.getVMObject().stateManager.getStateRoot();
              case 17:
                root = _context3.sent;
                this.runBlockInVm(tx, block, /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, result) {
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _this.getVMObject().stateManager.setStateRoot(root);
                          case 2:
                            callback(err, result);
                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));
                  return function (_x8, _x9) {
                    return _ref.apply(this, arguments);
                  };
                }());
                _context3.next = 23;
                break;
              case 21:
                this.blockParentHash = block.hash();
                this.runBlockInVm(tx, block, /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(err, result) {
                    return _regenerator["default"].wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!err) {
                              if (!useCall) {
                                _this.getVMObject().vm.blockchain.putBlock(block);
                                _this.blocks.push(block.serialize());
                              }
                            }
                            callback(err, result);
                          case 2:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));
                  return function (_x10, _x11) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              case 23:
                _context3.next = 28;
                break;
              case 25:
                _context3.prev = 25;
                _context3.t0 = _context3["catch"](3);
                callback(_context3.t0);
              case 28:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[3, 25]]);
      }));
      function runInVm(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
        return _runInVm.apply(this, arguments);
      }
      return runInVm;
    }()
  }, {
    key: "runTxInVm",
    value: function runTxInVm(tx, block, callback) {
      this.getVMObject().vm.runTx({
        tx: tx,
        skipNonce: true,
        skipBlockValidation: true,
        skipBalance: false
      }).then(function (result) {
        callback(null, {
          result: result,
          transactionHash: (0, _util.bytesToHex)(Buffer.from(tx.hash())),
          block: block,
          tx: tx
        });
      })["catch"](function (err) {
        callback(err);
      });
    }
  }, {
    key: "runBlockInVm",
    value: function runBlockInVm(tx, block, callback) {
      this.getVMObject().vm.runBlock({
        block: block,
        generate: true,
        skipNonce: true,
        skipBlockValidation: true,
        skipBalance: false
      }).then(function (results) {
        var result = results.results[0];
        callback(null, {
          result: result,
          transactionHash: (0, _util.bytesToHex)(Buffer.from(tx.hash())),
          block: block,
          tx: tx
        });
      })["catch"](function (err) {
        callback(err);
      });
    }
  }]);
  return TxRunnerVM;
}();
exports.TxRunnerVM = TxRunnerVM;

/***/ }),

/***/ 46727:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TxRunnerWeb3 = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(59454));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(91544));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(32830));
var _createClass2 = _interopRequireDefault(__webpack_require__(59152));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var _eventManager = __webpack_require__(14829);
var _web3Utils = __webpack_require__(69278);
var TxRunnerWeb3 = /*#__PURE__*/function () {
  function TxRunnerWeb3(api, getWeb3, currentblockGasLimit) {
    (0, _classCallCheck2["default"])(this, TxRunnerWeb3);
    (0, _defineProperty2["default"])(this, "event", void 0);
    (0, _defineProperty2["default"])(this, "_api", void 0);
    (0, _defineProperty2["default"])(this, "getWeb3", void 0);
    (0, _defineProperty2["default"])(this, "currentblockGasLimit", void 0);
    this.event = new _eventManager.EventManager();
    this.getWeb3 = getWeb3;
    this.currentblockGasLimit = currentblockGasLimit;
    this._api = api;
  }
  (0, _createClass2["default"])(TxRunnerWeb3, [{
    key: "_executeTx",
    value: function () {
      var _executeTx2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(tx, network, txFee, api, promptCb, callback) {
        var _this = this;
        var currentDateTime, start, cb, res;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (network && network.lastBlock && network.lastBlock.baseFeePerGas) {
                  // the sending stack (web3.js / metamask need to have the type defined)
                  // this is to avoid the following issue: https://github.com/MetaMask/metamask-extension/issues/11824
                  tx.type = '0x2';
                } else {
                  // tx.type = '0x1'
                }
                if (txFee) {
                  if (txFee.baseFeePerGas) {
                    tx.maxPriorityFeePerGas = (0, _web3Utils.toHex)(BigInt(this.getWeb3().utils.toWei(txFee.maxPriorityFee, 'gwei')));
                    tx.maxFeePerGas = (0, _web3Utils.toHex)(BigInt(this.getWeb3().utils.toWei(txFee.maxFee, 'gwei')));
                    tx.type = '0x2';
                  } else {
                    tx.gasPrice = (0, _web3Utils.toHex)(BigInt(this.getWeb3().utils.toWei(txFee.gasPrice, 'gwei')));
                    // tx.type = '0x1'
                  }
                }
                currentDateTime = new Date();
                start = currentDateTime.getTime() / 1000;
                cb = function cb(err, resp) {
                  if (err) {
                    return callback(err, resp);
                  }
                  _this.event.trigger('transactionBroadcasted', [resp]);
                  var listenOnResponse = function listenOnResponse() {
                    // eslint-disable-next-line no-async-promise-executor
                    return new Promise( /*#__PURE__*/function () {
                      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
                        var receipt, end;
                        return _regenerator["default"].wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return tryTillReceiptAvailable(resp, _this.getWeb3());
                              case 2:
                                receipt = _context.sent;
                                _context.next = 5;
                                return tryTillTxAvailable(resp, _this.getWeb3());
                              case 5:
                                tx = _context.sent;
                                currentDateTime = new Date();
                                end = currentDateTime.getTime() / 1000;
                                console.log('tx duration', end - start);
                                resolve({
                                  receipt: receipt,
                                  tx: tx,
                                  transactionHash: receipt ? receipt['transactionHash'] : null
                                });
                              case 10:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));
                      return function (_x7, _x8) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  };
                  listenOnResponse().then(function (txData) {
                    callback(null, txData);
                  })["catch"](function (error) {
                    callback(error);
                  });
                };
                if (!api.personalMode()) {
                  _context3.next = 9;
                  break;
                }
                promptCb( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(value) {
                    var res;
                    return _regenerator["default"].wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return _this.getWeb3().eth.personal.sendTransaction(Object.assign({}, tx, {
                              value: value
                            }), {
                              checkRevertBeforeSending: false,
                              ignoreGasPricing: true
                            });
                          case 3:
                            res = _context2.sent;
                            cb(null, res.transactionHash);
                            _context2.next = 11;
                            break;
                          case 7:
                            _context2.prev = 7;
                            _context2.t0 = _context2["catch"](0);
                            console.log("Send transaction failed: ".concat(_context2.t0.message, " . if you use an injected provider, please check it is properly unlocked. "));
                            // in case the receipt is available, we consider that only the execution failed but the transaction went through.
                            // So we don't consider this to be an error.
                            if (_context2.t0.receipt) cb(null, _context2.t0.receipt.transactionHash);else cb(_context2.t0, null);
                          case 11:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, null, [[0, 7]]);
                  }));
                  return function (_x9) {
                    return _ref2.apply(this, arguments);
                  };
                }(), function () {
                  return callback('Canceled by user.');
                });
                _context3.next = 20;
                break;
              case 9:
                _context3.prev = 9;
                _context3.next = 12;
                return this.getWeb3().eth.sendTransaction(tx, null, {
                  checkRevertBeforeSending: false,
                  ignoreGasPricing: true
                });
              case 12:
                res = _context3.sent;
                cb(null, res.transactionHash);
                _context3.next = 20;
                break;
              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](9);
                console.log("Send transaction failed: ".concat(_context3.t0.message, " . if you use an injected provider, please check it is properly unlocked. "));
                // in case the receipt is available, we consider that only the execution failed but the transaction went through.
                // So we don't consider this to be an error.
                if (_context3.t0.receipt) cb(null, _context3.t0.receipt.transactionHash);else cb(_context3.t0, null);
              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[9, 16]]);
      }));
      function _executeTx(_x, _x2, _x3, _x4, _x5, _x6) {
        return _executeTx2.apply(this, arguments);
      }
      return _executeTx;
    }()
  }, {
    key: "execute",
    value: function execute(args, confirmationCb, gasEstimationForceSend, promptCb, callback) {
      var data = args.data;
      if (data.slice(0, 2) !== '0x') {
        data = '0x' + data;
      }
      return this.runInNode(args.from, args.to, data, args.value, args.gasLimit, args.useCall, args.timestamp, confirmationCb, gasEstimationForceSend, promptCb, callback);
    }
  }, {
    key: "runInNode",
    value: function runInNode(from, to, data, value, gasLimit, useCall, timestamp, confirmCb, gasEstimationForceSend, promptCb, callback) {
      var _this2 = this;
      var tx = {
        from: from,
        to: to,
        data: data,
        value: value
      };
      if (!from) return callback('the value of "from" is not defined. Please make sure an account is selected.');
      if (useCall) {
        if (this._api && this._api.isVM()) {
          this.getWeb3().remix.registerCallId(timestamp);
        }
        this.getWeb3().eth.call(tx).then(function (result) {
          return callback(null, {
            result: result
          });
        })["catch"](function (error) {
          return callback(error);
        });
        return;
      }
      this._api.detectNetwork(function (errNetWork, network) {
        if (errNetWork) {
          console.log(errNetWork);
          return;
        }
        var txCopy = Object.assign({}, tx, {
          type: undefined,
          maxFeePerGas: undefined,
          gasPrice: undefined
        });
        if (network && network.lastBlock) {
          if (network.lastBlock.baseFeePerGas) {
            // the sending stack (web3.js / metamask need to have the type defined)
            // this is to avoid the following issue: https://github.com/MetaMask/metamask-extension/issues/11824
            txCopy.type = '0x2';
            txCopy.maxFeePerGas = Math.ceil(Number(((0, _web3Utils.toBigInt)(network.lastBlock.baseFeePerGas) + (0, _web3Utils.toBigInt)(network.lastBlock.baseFeePerGas) / BigInt(3)).toString()));
          } else {
            txCopy.type = '0x1';
            txCopy.gasPrice = undefined;
          }
        }
        _this2.getWeb3().eth.estimateGas(txCopy).then(function (gasEstimation) {
          gasEstimationForceSend(null, function () {
            /*
            * gasLimit is a value that can be set in the UI to hardcap value that can be put in a tx.
            * e.g if the gasestimate
            */
            if (gasLimit !== '0x0' && gasEstimation > gasLimit) {
              return callback("estimated gas for this transaction (".concat(gasEstimation, ") is higher than gasLimit set in the configuration  (").concat(gasLimit, "). Please raise the gas limit."));
            }
            if (gasLimit === '0x0') {
              tx['gas'] = gasEstimation;
            } else {
              tx['gas'] = gasLimit;
            }
            if (_this2._api.config.getUnpersistedProperty('doNotShowTransactionConfirmationAgain')) {
              return _this2._executeTx(tx, network, null, _this2._api, promptCb, callback);
            }
            confirmCb(network, tx, tx['gas'], function (txFee) {
              return _this2._executeTx(tx, network, txFee, _this2._api, promptCb, callback);
            }, function (error) {
              callback(error);
            });
          }, callback);
        })["catch"](function (err) {
          if (err && err.message.indexOf('Invalid JSON RPC response') !== -1) {
            // // @todo(#378) this should be removed when https://github.com/WalletConnect/walletconnect-monorepo/issues/334 is fixed
            callback(new Error('Gas estimation failed because of an unknown internal error. This may indicated that the transaction will fail.'));
          }
          err = network.name === 'VM' ? null : err; // just send the tx if "VM"
          gasEstimationForceSend(err, function () {
            var defaultGasLimit = 3000000;
            tx['gas'] = gasLimit === '0x0' ? '0x' + defaultGasLimit.toString(16) : gasLimit;
            if (_this2._api.config.getUnpersistedProperty('doNotShowTransactionConfirmationAgain')) {
              return _this2._executeTx(tx, network, null, _this2._api, promptCb, callback);
            }
            confirmCb(network, tx, tx['gas'], function (txFee) {
              return _this2._executeTx(tx, network, txFee, _this2._api, promptCb, callback);
            }, function (error) {
              callback(error);
            });
          }, callback);
        });
      });
    }
  }]);
  return TxRunnerWeb3;
}();
exports.TxRunnerWeb3 = TxRunnerWeb3;
function tryTillReceiptAvailable(_x10, _x11) {
  return _tryTillReceiptAvailable.apply(this, arguments);
}
function _tryTillReceiptAvailable() {
  _tryTillReceiptAvailable = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(txhash, web3) {
    var receipt;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return web3.eth.getTransactionReceipt(txhash);
          case 3:
            receipt = _context4.sent;
            if (!receipt) {
              _context4.next = 10;
              break;
            }
            if (!(!receipt.to && !receipt.contractAddress)) {
              _context4.next = 9;
              break;
            }
            // this is a contract creation and the receipt doesn't contain a contract address. we have to keep polling...
            console.log('this is a contract creation and the receipt does not contain a contract address. we have to keep polling...');
            _context4.next = 10;
            break;
          case 9:
            return _context4.abrupt("return", receipt);
          case 10:
            _context4.next = 14;
            break;
          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
          case 14:
            _context4.next = 16;
            return pause();
          case 16:
            _context4.next = 18;
            return tryTillReceiptAvailable(txhash, web3);
          case 18:
            return _context4.abrupt("return", _context4.sent);
          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return _tryTillReceiptAvailable.apply(this, arguments);
}
function tryTillTxAvailable(_x12, _x13) {
  return _tryTillTxAvailable.apply(this, arguments);
}
function _tryTillTxAvailable() {
  _tryTillTxAvailable = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(txhash, web3) {
    var tx;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return web3.eth.getTransaction(txhash);
          case 3:
            tx = _context5.sent;
            if (!(tx && tx.blockHash)) {
              _context5.next = 6;
              break;
            }
            return _context5.abrupt("return", tx);
          case 6:
            _context5.next = 10;
            break;
          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
          case 10:
            _context5.next = 12;
            return tryTillTxAvailable(txhash, web3);
          case 12:
            return _context5.abrupt("return", _context5.sent);
          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return _tryTillTxAvailable.apply(this, arguments);
}
function pause() {
  return _pause.apply(this, arguments);
}
function _pause() {
  _pause = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", new Promise(function (resolve, reject) {
              setTimeout(resolve, 500);
            }));
          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _pause.apply(this, arguments);
}

/***/ }),

/***/ 36814:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.stringify = void 0;
exports.toInt = toInt;
var _typeof2 = _interopRequireDefault(__webpack_require__(82840));
var _bn = __webpack_require__(64859);
var _util = __webpack_require__(35178);
var _web3Validator = __webpack_require__(6927);
function toInt(h) {
  if (h.indexOf && h.indexOf('0x') === 0) {
    return new _bn.BN(h.replace('0x', ''), 16).toString(10);
  } else if (h.constructor && h.constructor.name === 'BigNumber' || _bn.BN.isBN(h) || (0, _web3Validator.isBigInt)(h)) {
    return h.toString(10);
  }
  return h;
}
var stringify = convertToString;
exports.stringify = stringify;
function convertToString(v) {
  try {
    if (v instanceof Array) {
      var ret = [];
      for (var k in v) {
        ret.push(convertToString(v[k]));
      }
      return ret;
    } else if (_bn.BN.isBN(v) || v.constructor && v.constructor.name === 'BigNumber' || (0, _web3Validator.isBigInt)(v)) {
      return v.toString(10);
    } else if (v._isBigNumber) {
      return toInt(v._hex);
    } else if (v._isBuffer) {
      return (0, _util.bytesToHex)(v);
    } else if ((0, _typeof2["default"])(v) === 'object') {
      var retObject = {};
      for (var i in v) {
        retObject[i] = convertToString(v[i]);
      }
      return retObject;
    } else {
      return v;
    }
  } catch (e) {
    console.log(e);
    return v;
  }
}

/***/ }),

/***/ 2091:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(40144)["Buffer"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.sha256FromString = exports.sha256FromArray = exports.sha256 = exports.rlphash = exports.ripemd160FromString = exports.ripemd160FromArray = exports.ripemd160 = exports.keccakFromString = exports.keccakFromHexString = exports.keccakFromArray = exports.keccak256 = exports.keccak = exports.assertIsString = exports.assertIsHexString = exports.assertIsBuffer = exports.assertIsArray = void 0;
var _keccak = __webpack_require__(80838);
var _rlp = __webpack_require__(91755);
var _util = __webpack_require__(35178);
var createHash = __webpack_require__(36600);
/**
 * Creates Keccak hash of a Uint8Array input
 * @param a The input data (Uint8Array)
 * @param bits (number = 256) The Keccak width
 */
var keccak = function keccak(a) {
  var bits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 256;
  switch (bits) {
    case 224:
      {
        return (0, _util.toBytes)((0, _keccak.keccak224)(Buffer.from(a)));
      }
    case 256:
      {
        return (0, _util.toBytes)((0, _keccak.keccak256)(Buffer.from(a)));
      }
    case 384:
      {
        return (0, _util.toBytes)((0, _keccak.keccak384)(Buffer.from(a)));
      }
    case 512:
      {
        return (0, _util.toBytes)((0, _keccak.keccak512)(Buffer.from(a)));
      }
    default:
      {
        throw new Error("Invalid algorithm: keccak".concat(bits));
      }
  }
};

/**
 * Creates Keccak-256 hash of the input, alias for keccak(a, 256).
 * @param a The input data (Buffer)
 */
exports.keccak = keccak;
var keccak256 = function keccak256(a) {
  return keccak(a);
};

/**
 * Creates Keccak hash of a utf-8 string input
 * @param a The input data (String)
 * @param bits (number = 256) The Keccak width
 */
exports.keccak256 = keccak256;
var keccakFromString = function keccakFromString(a) {
  var bits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 256;
  assertIsString(a);
  var buf = Buffer.from(a, 'utf8');
  return keccak(buf, bits);
};

/**
 * Creates Keccak hash of an 0x-prefixed string input
 * @param a The input data (String)
 * @param bits (number = 256) The Keccak width
 */
exports.keccakFromString = keccakFromString;
var keccakFromHexString = function keccakFromHexString(a) {
  var bits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 256;
  assertIsHexString(a);
  return keccak(Buffer.from((0, _util.toBytes)(a)), bits);
};

/**
 * Creates Keccak hash of a number array input
 * @param a The input data (number[])
 * @param bits (number = 256) The Keccak width
 */
exports.keccakFromHexString = keccakFromHexString;
var keccakFromArray = function keccakFromArray(a) {
  var bits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 256;
  assertIsArray(a);
  return keccak(Buffer.from((0, _util.toBytes)(a)), bits);
};

/**
 * Creates SHA256 hash of an input.
 * @param  a The input data (Buffer|Array|String)
 */
exports.keccakFromArray = keccakFromArray;
var _sha256 = function _sha256(a) {
  a = (0, _util.toBytes)(a);
  return createHash('sha256').update(a).digest();
};

/**
 * Creates SHA256 hash of a Buffer input.
 * @param a The input data (Buffer)
 */
var sha256 = function sha256(a) {
  assertIsBuffer(a);
  return _sha256(a);
};

/**
 * Creates SHA256 hash of a string input.
 * @param a The input data (string)
 */
exports.sha256 = sha256;
var sha256FromString = function sha256FromString(a) {
  assertIsString(a);
  return _sha256(a);
};

/**
 * Creates SHA256 hash of a number[] input.
 * @param a The input data (number[])
 */
exports.sha256FromString = sha256FromString;
var sha256FromArray = function sha256FromArray(a) {
  assertIsArray(a);
  return _sha256(a);
};

/**
 * Creates RIPEMD160 hash of the input.
 * @param a The input data (Buffer|Array|String|Number)
 * @param padded Whether it should be padded to 256 bits or not
 */
exports.sha256FromArray = sha256FromArray;
var _ripemd160 = function _ripemd160(a, padded) {
  a = (0, _util.toBytes)(a);
  var hash = createHash('rmd160').update(a).digest();
  if (padded === true) {
    return Buffer.from((0, _util.setLengthLeft)(hash, 32));
  } else {
    return hash;
  }
};

/**
 * Creates RIPEMD160 hash of a Buffer input.
 * @param a The input data (Buffer)
 * @param padded Whether it should be padded to 256 bits or not
 */
var ripemd160 = function ripemd160(a, padded) {
  assertIsBuffer(a);
  return _ripemd160(a, padded);
};

/**
 * Creates RIPEMD160 hash of a string input.
 * @param a The input data (String)
 * @param padded Whether it should be padded to 256 bits or not
 */
exports.ripemd160 = ripemd160;
var ripemd160FromString = function ripemd160FromString(a, padded) {
  assertIsString(a);
  return _ripemd160(a, padded);
};

/**
 * Creates RIPEMD160 hash of a number[] input.
 * @param a The input data (number[])
 * @param padded Whether it should be padded to 256 bits or not
 */
exports.ripemd160FromString = ripemd160FromString;
var ripemd160FromArray = function ripemd160FromArray(a, padded) {
  assertIsArray(a);
  return _ripemd160(a, padded);
};

/**
 * Creates SHA-3 hash of the RLP encoded version of the input.
 * @param a The input data
 */
exports.ripemd160FromArray = ripemd160FromArray;
var rlphash = function rlphash(a) {
  return Buffer.from(keccak(Buffer.from((0, _rlp.encode)(a))));
};

/**
 * Throws if a string is not hex prefixed
 * @param {string} input string to check hex prefix of
 */
exports.rlphash = rlphash;
var assertIsHexString = function assertIsHexString(input) {
  if (!(0, _util.isHexString)(input)) {
    var msg = "This method only supports 0x-prefixed hex strings but input was: ".concat(input);
    throw new Error(msg);
  }
};

/**
 * Throws if input is not a buffer
 * @param {Buffer} input value to check
 */
exports.assertIsHexString = assertIsHexString;
var assertIsBuffer = function assertIsBuffer(input) {
  if (!Buffer.isBuffer(input)) {
    var msg = "This method only supports Buffer but input was: ".concat(input);
    throw new Error(msg);
  }
};

/**
 * Throws if input is not an array
 * @param {number[]} input value to check
 */
exports.assertIsBuffer = assertIsBuffer;
var assertIsArray = function assertIsArray(input) {
  if (!Array.isArray(input)) {
    var msg = "This method only supports number arrays but input was: ".concat(input);
    throw new Error(msg);
  }
};

/**
 * Throws if input is not a string
 * @param {string} input value to check
 */
exports.assertIsArray = assertIsArray;
var assertIsString = function assertIsString(input) {
  if (typeof input !== 'string') {
    var msg = "This method only supports strings but input was: ".concat(input);
    throw new Error(msg);
  }
};
exports.assertIsString = assertIsString;

/***/ }),

/***/ 48119:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.compilerInput = compilerInput;
function compilerInput(contracts) {
  return JSON.stringify({
    language: 'Solidity',
    sources: {
      'test.sol': {
        content: contracts
      }
    },
    settings: {
      optimizer: {
        enabled: false,
        runs: 200
      },
      outputSelection: {
        '*': {
          '': ['ast'],
          '*': ['abi', 'metadata', 'evm.legacyAssembly', 'evm.bytecode', 'evm.deployedBytecode', 'evm.methodIdentifiers', 'evm.gasEstimates']
        }
      }
    }
  });
}

/***/ }),

/***/ 20843:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ConsoleLogs = void 0;
// Fetched from https://github.com/nomiclabs/hardhat/blob/ee4969a0a8f746f4775d4018326056d161066869/packages/hardhat-core/src/internal/hardhat-network/stack-traces/logger.ts#L47

var ConsoleLogs = {
  // Legacy method signatures before this PR: https://github.com/NomicFoundation/hardhat/pull/2964
  1368866505: '()',
  1309416733: '(int)',
  4122065833: '(uint)',
  1093685164: '(string)',
  843419373: '(bool)',
  741264322: '(address)',
  199720790: '(bytes)',
  1847107880: '(bytes1)',
  3921027734: '(bytes2)',
  763578662: '(bytes3)',
  3764340945: '(bytes4)',
  2793701517: '(bytes5)',
  2927928721: '(bytes6)',
  1322614312: '(bytes7)',
  1334060334: '(bytes8)',
  2428341456: '(bytes9)',
  20780939: '(bytes10)',
  67127854: '(bytes11)',
  2258660029: '(bytes12)',
  2488442420: '(bytes13)',
  2456219775: '(bytes14)',
  3667227872: '(bytes15)',
  1717330180: '(bytes16)',
  866084666: '(bytes17)',
  3302112666: '(bytes18)',
  1584093747: '(bytes19)',
  1367925737: '(bytes20)',
  3923391840: '(bytes21)',
  3589990556: '(bytes22)',
  2879508237: '(bytes23)',
  4055063348: '(bytes24)',
  193248344: '(bytes25)',
  4172368369: '(bytes26)',
  976705501: '(bytes27)',
  3358255854: '(bytes28)',
  1265222613: '(bytes29)',
  3994207469: '(bytes30)',
  3263516050: '(bytes31)',
  666357637: '(bytes32)',
  1812949376: '(uint,uint)',
  262402885: '(uint,string)',
  510514412: '(uint,bool)',
  1491830284: '(uint,address)',
  2534451664: '(string,uint)',
  1264337527: '(string,string)',
  3283441205: '(string,bool)',
  832238387: '(string,address)',
  910912146: '(bool,uint)',
  2414527781: '(bool,string)',
  705760899: '(bool,bool)',
  2235320393: '(bool,address)',
  574869411: '(address,uint)',
  1973388987: '(address,string)',
  1974863315: '(address,bool)',
  3673216170: '(address,address)',
  3884059252: '(uint,uint,uint)',
  2104037094: '(uint,uint,string)',
  1733758967: '(uint,uint,bool)',
  3191032091: '(uint,uint,address)',
  1533929535: '(uint,string,uint)',
  1062716053: '(uint,string,string)',
  1185403086: '(uint,string,bool)',
  529592906: '(uint,string,address)',
  1515034914: '(uint,bool,uint)',
  2332955902: '(uint,bool,string)',
  3587091680: '(uint,bool,bool)',
  1112473535: '(uint,bool,address)',
  2286109610: '(uint,address,uint)',
  3464692859: '(uint,address,string)',
  2060456590: '(uint,address,bool)',
  2104993307: '(uint,address,address)',
  2526862595: '(string,uint,uint)',
  2750793529: '(string,uint,string)',
  4043501061: '(string,uint,bool)',
  3817119609: '(string,uint,address)',
  4083337817: '(string,string,uint)',
  753761519: '(string,string,string)',
  2967534005: '(string,string,bool)',
  2515337621: '(string,string,address)',
  689682896: '(string,bool,uint)',
  3801674877: '(string,bool,string)',
  2232122070: '(string,bool,bool)',
  2469116728: '(string,bool,address)',
  130552343: '(string,address,uint)',
  3773410639: '(string,address,string)',
  3374145236: '(string,address,bool)',
  4243355104: '(string,address,address)',
  995886048: '(bool,uint,uint)',
  3359211184: '(bool,uint,string)',
  464374251: '(bool,uint,bool)',
  3302110471: '(bool,uint,address)',
  3224906412: '(bool,string,uint)',
  2960557183: '(bool,string,string)',
  3686056519: '(bool,string,bool)',
  2509355347: '(bool,string,address)',
  2954061243: '(bool,bool,uint)',
  626391622: '(bool,bool,string)',
  1349555864: '(bool,bool,bool)',
  276362893: '(bool,bool,address)',
  3950005167: '(bool,address,uint)',
  3734671984: '(bool,address,string)',
  415876934: '(bool,address,bool)',
  3530962535: '(bool,address,address)',
  2273710942: '(address,uint,uint)',
  3136907337: '(address,uint,string)',
  3846889796: '(address,uint,bool)',
  2548867988: '(address,uint,address)',
  484110986: '(address,string,uint)',
  4218888805: '(address,string,string)',
  3473018801: '(address,string,bool)',
  4035396840: '(address,string,address)',
  742821141: '(address,bool,uint)',
  555898316: '(address,bool,string)',
  3951234194: '(address,bool,bool)',
  4044790253: '(address,bool,address)',
  1815506290: '(address,address,uint)',
  7426238: '(address,address,string)',
  4070990470: '(address,address,bool)',
  25986242: '(address,address,address)',
  1554033982: '(uint,uint,uint,uint)',
  2024634892: '(uint,uint,uint,string)',
  1683143115: '(uint,uint,uint,bool)',
  3766828905: '(uint,uint,uint,address)',
  949229117: '(uint,uint,string,uint)',
  2080582194: '(uint,uint,string,string)',
  2989403910: '(uint,uint,string,bool)',
  1127384482: '(uint,uint,string,address)',
  1818524812: '(uint,uint,bool,uint)',
  4024028142: '(uint,uint,bool,string)',
  2495495089: '(uint,uint,bool,bool)',
  3776410703: '(uint,uint,bool,address)',
  1628154048: '(uint,uint,address,uint)',
  3600994782: '(uint,uint,address,string)',
  2833785006: '(uint,uint,address,bool)',
  3398671136: '(uint,uint,address,address)',
  3221501959: '(uint,string,uint,uint)',
  2730232985: '(uint,string,uint,string)',
  2270850606: '(uint,string,uint,bool)',
  2877020669: '(uint,string,uint,address)',
  1995203422: '(uint,string,string,uint)',
  1474103825: '(uint,string,string,string)',
  310782872: '(uint,string,string,bool)',
  3432549024: '(uint,string,string,address)',
  2763295359: '(uint,string,bool,uint)',
  2370346144: '(uint,string,bool,string)',
  1371286465: '(uint,string,bool,bool)',
  2037328032: '(uint,string,bool,address)',
  2565338099: '(uint,string,address,uint)',
  4170733439: '(uint,string,address,string)',
  4181720887: '(uint,string,address,bool)',
  2141537675: '(uint,string,address,address)',
  1451396516: '(uint,bool,uint,uint)',
  3906845782: '(uint,bool,uint,string)',
  3534472445: '(uint,bool,uint,bool)',
  1329595790: '(uint,bool,uint,address)',
  2438978344: '(uint,bool,string,uint)',
  2754870525: '(uint,bool,string,string)',
  879671495: '(uint,bool,string,bool)',
  1231956916: '(uint,bool,string,address)',
  3173363033: '(uint,bool,bool,uint)',
  831186331: '(uint,bool,bool,string)',
  1315722005: '(uint,bool,bool,bool)',
  1392910941: '(uint,bool,bool,address)',
  1102442299: '(uint,bool,address,uint)',
  2721084958: '(uint,bool,address,string)',
  2449150530: '(uint,bool,address,bool)',
  2263728396: '(uint,bool,address,address)',
  3399106228: '(uint,address,uint,uint)',
  1054063912: '(uint,address,uint,string)',
  435581801: '(uint,address,uint,bool)',
  4256361684: '(uint,address,uint,address)',
  2697204968: '(uint,address,string,uint)',
  2373420580: '(uint,address,string,string)',
  581204390: '(uint,address,string,bool)',
  3420819197: '(uint,address,string,address)',
  2064181483: '(uint,address,bool,uint)',
  1676730946: '(uint,address,bool,string)',
  2116501773: '(uint,address,bool,bool)',
  3056677012: '(uint,address,bool,address)',
  2587672470: '(uint,address,address,uint)',
  2034490470: '(uint,address,address,string)',
  22350596: '(uint,address,address,bool)',
  1430734329: '(uint,address,address,address)',
  149837414: '(string,uint,uint,uint)',
  2773406909: '(string,uint,uint,string)',
  4147936829: '(string,uint,uint,bool)',
  3201771711: '(string,uint,uint,address)',
  2697245221: '(string,uint,string,uint)',
  1821956834: '(string,uint,string,string)',
  3919545039: '(string,uint,string,bool)',
  3144824297: '(string,uint,string,address)',
  1427009269: '(string,uint,bool,uint)',
  1993105508: '(string,uint,bool,string)',
  3816813520: '(string,uint,bool,bool)',
  3847527825: '(string,uint,bool,address)',
  1481210622: '(string,uint,address,uint)',
  844415720: '(string,uint,address,string)',
  285649143: '(string,uint,address,bool)',
  3939013249: '(string,uint,address,address)',
  3587119056: '(string,string,uint,uint)',
  2366909661: '(string,string,uint,string)',
  3864418506: '(string,string,uint,bool)',
  1565476480: '(string,string,uint,address)',
  2681211381: '(string,string,string,uint)',
  3731419658: '(string,string,string,string)',
  739726573: '(string,string,string,bool)',
  1834430276: '(string,string,string,address)',
  2256636538: '(string,string,bool,uint)',
  1585754346: '(string,string,bool,string)',
  1081628777: '(string,string,bool,bool)',
  3279013851: '(string,string,bool,address)',
  1250010474: '(string,string,address,uint)',
  3944480640: '(string,string,address,string)',
  1556958775: '(string,string,address,bool)',
  1134328815: '(string,string,address,address)',
  1572859960: '(string,bool,uint,uint)',
  1119461927: '(string,bool,uint,string)',
  1019590099: '(string,bool,uint,bool)',
  1909687565: '(string,bool,uint,address)',
  885731469: '(string,bool,string,uint)',
  2821114603: '(string,bool,string,string)',
  1066037277: '(string,bool,string,bool)',
  3764542249: '(string,bool,string,address)',
  2155164136: '(string,bool,bool,uint)',
  2636305885: '(string,bool,bool,string)',
  2304440517: '(string,bool,bool,bool)',
  1905304873: '(string,bool,bool,address)',
  685723286: '(string,bool,address,uint)',
  764294052: '(string,bool,address,string)',
  2508990662: '(string,bool,address,bool)',
  870964509: '(string,bool,address,address)',
  3668153533: '(string,address,uint,uint)',
  1280700980: '(string,address,uint,string)',
  1522647356: '(string,address,uint,bool)',
  2741431424: '(string,address,uint,address)',
  2405583849: '(string,address,string,uint)',
  609847026: '(string,address,string,string)',
  1595265676: '(string,address,string,bool)',
  2864486961: '(string,address,string,address)',
  3318856587: '(string,address,bool,uint)',
  72663161: '(string,address,bool,string)',
  2038975531: '(string,address,bool,bool)',
  573965245: '(string,address,bool,address)',
  1857524797: '(string,address,address,uint)',
  2148146279: '(string,address,address,string)',
  3047013728: '(string,address,address,bool)',
  3985582326: '(string,address,address,address)',
  853517604: '(bool,uint,uint,uint)',
  3657852616: '(bool,uint,uint,string)',
  2753397214: '(bool,uint,uint,bool)',
  4049711649: '(bool,uint,uint,address)',
  1098907931: '(bool,uint,string,uint)',
  3542771016: '(bool,uint,string,string)',
  2446522387: '(bool,uint,string,bool)',
  2781285673: '(bool,uint,string,address)',
  3554563475: '(bool,uint,bool,uint)',
  3067439572: '(bool,uint,bool,string)',
  2650928961: '(bool,uint,bool,bool)',
  1114097656: '(bool,uint,bool,address)',
  3399820138: '(bool,uint,address,uint)',
  403247937: '(bool,uint,address,string)',
  1705899016: '(bool,uint,address,bool)',
  2318373034: '(bool,uint,address,address)',
  2387273838: '(bool,string,uint,uint)',
  2007084013: '(bool,string,uint,string)',
  549177775: '(bool,string,uint,bool)',
  1529002296: '(bool,string,uint,address)',
  1574643090: '(bool,string,string,uint)',
  392356650: '(bool,string,string,string)',
  508266469: '(bool,string,string,bool)',
  2547225816: '(bool,string,string,address)',
  2372902053: '(bool,string,bool,uint)',
  1211958294: '(bool,string,bool,string)',
  3697185627: '(bool,string,bool,bool)',
  1401816747: '(bool,string,bool,address)',
  453743963: '(bool,string,address,uint)',
  316065672: '(bool,string,address,string)',
  1842623690: '(bool,string,address,bool)',
  724244700: '(bool,string,address,address)',
  1181212302: '(bool,bool,uint,uint)',
  1348569399: '(bool,bool,uint,string)',
  2874982852: '(bool,bool,uint,bool)',
  201299213: '(bool,bool,uint,address)',
  395003525: '(bool,bool,string,uint)',
  1830717265: '(bool,bool,string,string)',
  3092715066: '(bool,bool,string,bool)',
  4188875657: '(bool,bool,string,address)',
  3259532109: '(bool,bool,bool,uint)',
  719587540: '(bool,bool,bool,string)',
  992632032: '(bool,bool,bool,bool)',
  2352126746: '(bool,bool,bool,address)',
  1620281063: '(bool,bool,address,uint)',
  2695133539: '(bool,bool,address,string)',
  3231908568: '(bool,bool,address,bool)',
  4102557348: '(bool,bool,address,address)',
  2617143996: '(bool,address,uint,uint)',
  2691192883: '(bool,address,uint,string)',
  4002252402: '(bool,address,uint,bool)',
  1760647349: '(bool,address,uint,address)',
  194640930: '(bool,address,string,uint)',
  2805734838: '(bool,address,string,string)',
  3804222987: '(bool,address,string,bool)',
  1870422078: '(bool,address,string,address)',
  1287000017: '(bool,address,bool,uint)',
  1248250676: '(bool,address,bool,string)',
  1788626827: '(bool,address,bool,bool)',
  474063670: '(bool,address,bool,address)',
  1384430956: '(bool,address,address,uint)',
  3625099623: '(bool,address,address,string)',
  1180699616: '(bool,address,address,bool)',
  487903233: '(bool,address,address,address)',
  1024368100: '(address,uint,uint,uint)',
  2301889963: '(address,uint,uint,string)',
  3964381346: '(address,uint,uint,bool)',
  519451700: '(address,uint,uint,address)',
  4111650715: '(address,uint,string,uint)',
  2119616147: '(address,uint,string,string)',
  2751614737: '(address,uint,string,bool)',
  3698927108: '(address,uint,string,address)',
  1770996626: '(address,uint,bool,uint)',
  2391690869: '(address,uint,bool,string)',
  4272018778: '(address,uint,bool,bool)',
  602229106: '(address,uint,bool,address)',
  2782496616: '(address,uint,address,uint)',
  1567749022: '(address,uint,address,string)',
  4051804649: '(address,uint,address,bool)',
  3961816175: '(address,uint,address,address)',
  2764647008: '(address,string,uint,uint)',
  1561552329: '(address,string,uint,string)',
  2116357467: '(address,string,uint,bool)',
  3755464715: '(address,string,uint,address)',
  2706362425: '(address,string,string,uint)',
  1560462603: '(address,string,string,string)',
  900007711: '(address,string,string,bool)',
  2689478535: '(address,string,string,address)',
  3877655068: '(address,string,bool,uint)',
  3154862590: '(address,string,bool,string)',
  1595759775: '(address,string,bool,bool)',
  542667202: '(address,string,bool,address)',
  2350461865: '(address,string,address,uint)',
  4158874181: '(address,string,address,string)',
  233909110: '(address,string,address,bool)',
  221706784: '(address,string,address,address)',
  3255869470: '(address,bool,uint,uint)',
  2606272204: '(address,bool,uint,string)',
  2244855215: '(address,bool,uint,bool)',
  227337758: '(address,bool,uint,address)',
  2652011374: '(address,bool,string,uint)',
  1197235251: '(address,bool,string,string)',
  1353532957: '(address,bool,string,bool)',
  436029782: '(address,bool,string,address)',
  3484780374: '(address,bool,bool,uint)',
  3754205928: '(address,bool,bool,string)',
  3401856121: '(address,bool,bool,bool)',
  3476636805: '(address,bool,bool,address)',
  3698398930: '(address,bool,address,uint)',
  769095910: '(address,bool,address,string)',
  2801077007: '(address,bool,address,bool)',
  1711502813: '(address,bool,address,address)',
  1425929188: '(address,address,uint,uint)',
  2647731885: '(address,address,uint,string)',
  3270936812: '(address,address,uint,bool)',
  3603321462: '(address,address,uint,address)',
  69767936: '(address,address,string,uint)',
  566079269: '(address,address,string,string)',
  1863997774: '(address,address,string,bool)',
  2406706454: '(address,address,string,address)',
  2513854225: '(address,address,bool,uint)',
  2858762440: '(address,address,bool,string)',
  752096074: '(address,address,bool,bool)',
  2669396846: '(address,address,bool,address)',
  3982404743: '(address,address,address,uint)',
  4161329696: '(address,address,address,string)',
  238520724: '(address,address,address,bool)',
  1717301556: '(address,address,address,address)',
  4133908826: '(uint,uint)',
  3054400204: '(string,uint)',
  // Latest method signatures after updating uint to uint256 and int to int256

  760966329: '(int256)',
  4163653873: '(uint256)',
  1681903839: '(uint256, string)',
  480083635: '(uint256, bool)',
  1764191366: '(uint256, address)',
  965833939: '(bool, uint256)',
  2198464680: '(address, uint256)',
  3522001468: '(uint256, uint256, uint256)',
  1909476082: '(uint256, uint256, string)',
  1197922930: '(uint256, uint256, bool)',
  1553380145: '(uint256, uint256, address)',
  933920076: '(uint256, string, uint256)',
  2970968351: '(uint256, string, string)',
  1290643290: '(uint256, string, bool)',
  2063255897: '(uint256, string, address)',
  537493524: '(uint256, bool, uint256)',
  2239189025: '(uint256, bool, string)',
  544310864: '(uint256, bool, bool)',
  889741179: '(uint256, bool, address)',
  1520131797: '(uint256, address, uint256)',
  1674265081: '(uint256, address, string)',
  2607726658: '(uint256, address, bool)',
  3170737120: '(uint256, address, address)',
  3393701099: '(string, uint256, uint256)',
  1500569737: '(string, uint256, string)',
  3396809649: '(string, uint256, bool)',
  478069832: '(string, uint256, address)',
  1478619041: '(string, string, uint256)',
  3378075862: '(string, bool, uint256)',
  220641573: '(string, address, uint256)',
  923808615: '(bool, uint256, uint256)',
  3288086896: '(bool, uint256, string)',
  3906927529: '(bool, uint256, bool)',
  143587794: '(bool, uint256, address)',
  278130193: '(bool, string, uint256)',
  317855234: '(bool, bool, uint256)',
  1601936123: '(bool, address, uint256)',
  3063663350: '(address, uint256, uint256)',
  2717051050: '(address, uint256, string)',
  1736575400: '(address, uint256, bool)',
  2076235848: '(address, uint256, address)',
  1742565361: '(address, string, uint256)',
  2622462459: '(address, bool, uint256)',
  402547077: '(address, address, uint256)',
  423606272: '(uint256, uint256, uint256, uint256)',
  1506790371: '(uint256, uint256, uint256, string)',
  4202792367: '(uint256, uint256, uint256, address)',
  1570936811: '(uint256, uint256, string, uint256)',
  668512210: '(uint256, uint256, string, string)',
  2062986021: '(uint256, uint256, string, bool)',
  1121066423: '(uint256, uint256, string, address)',
  3950997458: '(uint256, uint256, bool, uint256)',
  2780101785: '(uint256, uint256, bool, string)',
  2869451494: '(uint256, uint256, bool, bool)',
  2592172675: '(uint256, uint256, bool, address)',
  2297881778: '(uint256, uint256, address, uint256)',
  1826504888: '(uint256, uint256, address, string)',
  365610102: '(uint256, uint256, address, bool)',
  1453707697: '(uint256, uint256, address, address)',
  2193775476: '(uint256, string, uint256, uint256)',
  3082360010: '(uint256, string, uint256, string)',
  1763348340: '(uint256, string, uint256, bool)',
  992115124: '(uint256, string, uint256, address)',
  2955463101: '(uint256, string, string, uint256)',
  564987523: '(uint256, string, string, string)',
  3014047421: '(uint256, string, string, bool)',
  3582182914: '(uint256, string, string, address)',
  3472922752: '(uint256, string, bool, uint256)',
  3537118157: '(uint256, string, bool, string)',
  3126025628: '(uint256, string, bool, bool)',
  2922300801: '(uint256, string, bool, address)',
  3906142605: '(uint256, string, address, uint256)',
  2621104033: '(uint256, string, address, string)',
  2428701270: '(uint256, string, address, bool)',
  1634266465: '(uint256, string, address, address)',
  3333212072: '(uint256, bool, uint256, uint256)',
  3724797812: '(uint256, bool, uint256, string)',
  2443193898: '(uint256, bool, uint256, bool)',
  2295029825: '(uint256, bool, uint256, address)',
  740099910: '(uint256, bool, string, uint256)',
  1757984957: '(uint256, bool, string, string)',
  3952250239: '(uint256, bool, string, bool)',
  4015165464: '(uint256, bool, string, address)',
  1952763427: '(uint256, bool, bool, uint256)',
  3722155361: '(uint256, bool, bool, string)',
  3069540257: '(uint256, bool, bool, bool)',
  1768164185: '(uint256, bool, bool, address)',
  125994997: '(uint256, bool, address, uint256)',
  2917159623: '(uint256, bool, address, string)',
  1162695845: '(uint256, bool, address, bool)',
  2716814523: '(uint256, bool, address, address)',
  211605953: '(uint256, address, uint256, uint256)',
  3719324961: '(uint256, address, uint256, string)',
  1601452668: '(uint256, address, uint256, bool)',
  364980149: '(uint256, address, uint256, address)',
  1182952285: '(uint256, address, string, uint256)',
  1041403043: '(uint256, address, string, string)',
  3425872647: '(uint256, address, string, bool)',
  2629472255: '(uint256, address, string, address)',
  1522374954: '(uint256, address, bool, uint256)',
  2432370346: '(uint256, address, bool, string)',
  3813741583: '(uint256, address, bool, bool)',
  4017276179: '(uint256, address, bool, address)',
  1936653238: '(uint256, address, address, uint256)',
  52195187: '(uint256, address, address, string)',
  153090805: '(uint256, address, address, bool)',
  612938772: '(uint256, address, address, address)',
  2812835923: '(string, uint256, uint256, uint256)',
  2236298390: '(string, uint256, uint256, string)',
  1982258066: '(string, uint256, uint256, bool)',
  3793609336: '(string, uint256, uint256, address)',
  3330189777: '(string, uint256, string, uint256)',
  1522028063: '(string, uint256, string, string)',
  2099530013: '(string, uint256, string, bool)',
  2084975268: '(string, uint256, string, address)',
  3827003247: '(string, uint256, bool, uint256)',
  2885106328: '(string, uint256, bool, string)',
  894187222: '(string, uint256, bool, bool)',
  3773389720: '(string, uint256, bool, address)',
  1325727174: '(string, uint256, address, uint256)',
  2684039059: '(string, uint256, address, string)',
  2182163010: '(string, uint256, address, bool)',
  1587722158: '(string, uint256, address, address)',
  4099767596: '(string, string, uint256, uint256)',
  1562023706: '(string, string, uint256, string)',
  3282609748: '(string, string, uint256, bool)',
  270792626: '(string, string, uint256, address)',
  2393878571: '(string, string, string, uint256)',
  3601791698: '(string, string, bool, uint256)',
  2093204999: '(string, string, address, uint256)',
  1689631591: '(string, bool, uint256, uint256)',
  1949134567: '(string, bool, uint256, string)',
  2331496330: '(string, bool, uint256, bool)',
  2472413631: '(string, bool, uint256, address)',
  620303461: '(string, bool, string, uint256)',
  2386524329: '(string, bool, bool, uint256)',
  1560853253: '(string, bool, address, uint256)',
  4176812830: '(string, address, uint256, uint256)',
  1514632754: '(string, address, uint256, string)',
  4232594928: '(string, address, uint256, bool)',
  1677429701: '(string, address, uint256, address)',
  2446397742: '(string, address, string, uint256)',
  1050642026: '(string, address, bool, uint256)',
  2398352281: '(string, address, address, uint256)',
  927708338: '(bool, uint256, uint256, uint256)',
  2389310301: '(bool, uint256, uint256, string)',
  3197649747: '(bool, uint256, uint256, bool)',
  14518201: '(bool, uint256, uint256, address)',
  1779538402: '(bool, uint256, string, uint256)',
  4122747465: '(bool, uint256, string, string)',
  3857124139: '(bool, uint256, string, bool)',
  4275904511: '(bool, uint256, string, address)',
  2437143473: '(bool, uint256, bool, string)',
  3468031191: '(bool, uint256, bool, bool)',
  2597139990: '(bool, uint256, bool, address)',
  355982471: '(bool, uint256, address, uint256)',
  464760986: '(bool, uint256, address, string)',
  3032683775: '(bool, uint256, address, bool)',
  653615272: '(bool, uint256, address, address)',
  679886795: '(bool, string, uint256, uint256)',
  450457062: '(bool, string, uint256, string)',
  1796103507: '(bool, string, uint256, bool)',
  362193358: '(bool, string, uint256, address)',
  2078327787: '(bool, string, string, uint256)',
  369533843: '(bool, string, bool, uint256)',
  196087467: '(bool, bool, uint256, uint256)',
  2111099104: '(bool, bool, uint256, string)',
  1637764366: '(bool, bool, uint256, bool)',
  1420274080: '(bool, bool, uint256, address)',
  3819555375: '(bool, bool, string, uint256)',
  1836074433: '(bool, bool, bool, uint256)',
  1276263767: '(bool, bool, address, uint256)',
  2079424929: '(bool, address, uint256, uint256)',
  1374724088: '(bool, address, uint256, string)',
  3590430492: '(bool, address, uint256, bool)',
  325780957: '(bool, address, uint256, address)',
  3256837319: '(bool, address, string, uint256)',
  126031106: '(bool, address, bool, uint256)',
  208064958: '(bool, address, address, uint256)',
  888202806: '(address, uint256, uint256, uint256)',
  1244184599: '(address, uint256, uint256, string)',
  1727118439: '(address, uint256, uint256, bool)',
  551786573: '(address, uint256, uint256, address)',
  3204577425: '(address, uint256, string, uint256)',
  2292761606: '(address, uint256, string, string)',
  3474460764: '(address, uint256, string, bool)',
  1547898183: '(address, uint256, string, address)',
  586594713: '(address, uint256, bool, uint256)',
  3316483577: '(address, uint256, bool, string)',
  1005970743: '(address, uint256, bool, bool)',
  2736520652: '(address, uint256, bool, address)',
  269444366: '(address, uint256, address, uint256)',
  497649386: '(address, uint256, address, string)',
  2713504179: '(address, uint256, address, bool)',
  1200430178: '(address, uint256, address, address)',
  499704248: '(address, string, uint256, uint256)',
  1149776040: '(address, string, uint256, string)',
  251125840: '(address, string, uint256, bool)',
  1662531192: '(address, string, uint256, address)',
  362776871: '(address, string, string, uint256)',
  1365129398: '(address, string, bool, uint256)',
  1166009295: '(address, string, address, uint256)',
  946861556: '(address, bool, uint256, uint256)',
  178704301: '(address, bool, uint256, string)',
  3294903840: '(address, bool, uint256, bool)',
  3438776481: '(address, bool, uint256, address)',
  2162598411: '(address, bool, string, uint256)',
  2353946086: '(address, bool, bool, uint256)',
  2807847390: '(address, bool, address, uint256)',
  3193255041: '(address, address, uint256, uint256)',
  4256496016: '(address, address, uint256, string)',
  2604815586: '(address, address, uint256, bool)',
  2376523509: '(address, address, uint256, address)',
  4011651047: '(address, address, string, uint256)',
  963766156: '(address, address, bool, uint256)',
  2485456247: '(address, address, address, uint256)'
};
exports.ConsoleLogs = ConsoleLogs;

/***/ }),

/***/ 92875:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resultToRemixTx = resultToRemixTx;
var _util = __webpack_require__(35178);
var _ethjsUtil = __webpack_require__(32860);
var _bn = __webpack_require__(64859);
var _web3Validator = __webpack_require__(6927);
function convertToPrefixedHex(input) {
  if (input === undefined || input === null || (0, _ethjsUtil.isHexString)(input)) {
    return input;
  }
  if (input.constructor && input.constructor.name === 'BigNumber' || _bn.BN.isBN(input) || (0, _web3Validator.isBigInt)(input) || typeof input === 'number') {
    return '0x' + input.toString(16);
  }
  try {
    return (0, _util.bytesToHex)(input);
  } catch (e) {
    console.log(e);
  }
  try {
    // BigNumber
    return '0x' + input.toString(16);
  } catch (e) {
    console.log(e);
  }
  return input;
}

/*
 txResult.result can be 3 different things:
 - VM call or tx: ethereumjs-vm result object
 - Node transaction: object returned from eth.getTransactionReceipt()
 - Node call: return value from function call (not an object)

 Also, VM results use BN and Buffers, Node results use hex strings/ints,
 So we need to normalize the values to prefixed hex strings
*/
function resultToRemixTx(txResult, execResult) {
  var receipt = txResult.receipt,
    transactionHash = txResult.transactionHash,
    result = txResult.result;
  var status = receipt.status,
    gasUsed = receipt.gasUsed,
    contractAddress = receipt.contractAddress;
  var returnValue, errorMessage;
  if ((0, _ethjsUtil.isHexString)(result)) {
    returnValue = result;
  } else if (execResult !== undefined) {
    returnValue = execResult.returnValue;
    errorMessage = execResult.exceptionError;
  }
  return {
    transactionHash: transactionHash,
    status: convertToPrefixedHex(status),
    gasUsed: convertToPrefixedHex(gasUsed),
    error: errorMessage,
    "return": returnValue ? convertToPrefixedHex(returnValue) : undefined,
    createdAddress: convertToPrefixedHex(contractAddress)
  };
}

/***/ }),

/***/ 72113:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.formatCss = formatCss;
exports.formatMemory = formatMemory;
exports.normalizeHex = normalizeHex;
exports.normalizeHexAddress = normalizeHexAddress;
exports.runInBrowser = runInBrowser;
exports.tryConvertAsciiFormat = tryConvertAsciiFormat;
function formatMemory(mem, width) {
  var ret = {};
  if (!mem) {
    return ret;
  }
  if (!mem.substr) {
    mem = mem.join(''); // geth returns an array, eth return raw string
  }

  for (var k = 0; k < mem.length; k += width * 2) {
    var memory = mem.substr(k, width * 2);
    var content = tryConvertAsciiFormat(memory);
    ret['0x' + (k / 2).toString(16)] = content.raw + '\t' + content.ascii;
  }
  return ret;
}
function tryConvertAsciiFormat(memorySlot) {
  var ret = {
    ascii: '',
    raw: ''
  };
  for (var k = 0; k < memorySlot.length; k += 2) {
    var raw = memorySlot.substr(k, 2);
    var ascii = String.fromCharCode(parseInt(raw, 16));
    ascii = ascii.replace(/[^\w\s]/, '?');
    if (ascii === '') {
      ascii = '?';
    }
    ret.ascii += ascii;
    ret.raw += raw;
  }
  return ret;
}

/**
 * format @args css1, css2, css3 to css inline style
 *
 * @param {Object} css1 - css inline declaration
 * @param {Object} css2 - css inline declaration
 * @param {Object} css3 - css inline declaration
 * @param {Object} ...
 * @return {String} css inline style
 *                  if the key start with * the value is directly appended to the inline style (which should be already inline style formatted)
 *                  used if multiple occurrences of the same key is needed
 */
function formatCss(css1, css2) {
  var ret = '';
  for (var arg in arguments) {
    // eslint-disable-line
    for (var k in arguments[arg]) {
      // eslint-disable-line
      if (arguments[arg][k] && ret.indexOf(k) === -1) {
        // eslint-disable-line
        if (k.indexOf('*') === 0) {
          ret += arguments[arg][k]; // eslint-disable-line
        } else {
          ret += k + ':' + arguments[arg][k] + ';'; // eslint-disable-line
        }
      }
    }
  }

  return ret;
}
function normalizeHex(hex) {
  if (hex.indexOf('0x') === 0) {
    hex = hex.replace('0x', '');
  }
  hex = hex.replace(/^0+/, '');
  return '0x' + hex;
}
function normalizeHexAddress(hex) {
  if (hex.indexOf('0x') === 0) hex = hex.replace('0x', '');
  if (hex.length >= 40) {
    var reg = /(.{40})$/.exec(hex);
    if (reg) {
      return '0x' + reg[0];
    }
  } else {
    return '0x' + new Array(40 - hex.length + 1).join('0') + hex;
  }
}
function runInBrowser() {
  return typeof window !== 'undefined';
}

/***/ }),

/***/ 37559:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(22886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "ConfigurationSettings", ({
  enumerable: true,
  get: function get() {
    return _ICompilerApi.ConfigurationSettings;
  }
}));
Object.defineProperty(exports, "ConsoleLogs", ({
  enumerable: true,
  get: function get() {
    return _hhconsoleSigs.ConsoleLogs;
  }
}));
Object.defineProperty(exports, "EventManager", ({
  enumerable: true,
  get: function get() {
    return _eventManager.EventManager;
  }
}));
Object.defineProperty(exports, "ICompilerApi", ({
  enumerable: true,
  get: function get() {
    return _ICompilerApi.ICompilerApi;
  }
}));
Object.defineProperty(exports, "QueryParams", ({
  enumerable: true,
  get: function get() {
    return _queryParams.QueryParams;
  }
}));
Object.defineProperty(exports, "Registry", ({
  enumerable: true,
  get: function get() {
    return _registry.Registry;
  }
}));
Object.defineProperty(exports, "Storage", ({
  enumerable: true,
  get: function get() {
    return _storage.Storage;
  }
}));
Object.defineProperty(exports, "VMexecutionResult", ({
  enumerable: true,
  get: function get() {
    return _txRunnerVM.VMexecutionResult;
  }
}));
exports.helpers = exports.hash = exports.execution = void 0;
Object.defineProperty(exports, "iSolJsonBinData", ({
  enumerable: true,
  get: function get() {
    return _ICompilerApi.iSolJsonBinData;
  }
}));
Object.defineProperty(exports, "iSolJsonBinDataBuild", ({
  enumerable: true,
  get: function get() {
    return _ICompilerApi.iSolJsonBinDataBuild;
  }
}));
exports.util = void 0;
var _eventManager = __webpack_require__(14829);
var uiHelper = _interopRequireWildcard(__webpack_require__(72113));
var compilerHelper = _interopRequireWildcard(__webpack_require__(48119));
var util = _interopRequireWildcard(__webpack_require__(90434));
exports.util = util;
var hash = _interopRequireWildcard(__webpack_require__(2091));
exports.hash = hash;
var _storage = __webpack_require__(86774);
var _eventsDecoder = __webpack_require__(19666);
var txExecution = _interopRequireWildcard(__webpack_require__(55491));
var txHelper = _interopRequireWildcard(__webpack_require__(15642));
var txFormat = _interopRequireWildcard(__webpack_require__(69572));
var _txListener = __webpack_require__(31274);
var _txRunner = __webpack_require__(92136);
var _logsManager = __webpack_require__(9531);
var _forkAt = __webpack_require__(95468);
var typeConversion = _interopRequireWildcard(__webpack_require__(36814));
var _txRunnerVM = __webpack_require__(51416);
var _txRunnerWeb = __webpack_require__(46727);
var txResultHelper = _interopRequireWildcard(__webpack_require__(92875));
var _hhconsoleSigs = __webpack_require__(20843);
var _ICompilerApi = __webpack_require__(22645);
var _queryParams = __webpack_require__(83733);
var _registry = __webpack_require__(35577);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var helpers = {
  ui: uiHelper,
  compiler: compilerHelper,
  txResultHelper: txResultHelper
};
exports.helpers = helpers;
var execution = {
  EventsDecoder: _eventsDecoder.EventsDecoder,
  txExecution: txExecution,
  txHelper: txHelper,
  txFormat: txFormat,
  txListener: _txListener.TxListener,
  TxRunner: _txRunner.TxRunner,
  TxRunnerWeb3: _txRunnerWeb.TxRunnerWeb3,
  TxRunnerVM: _txRunnerVM.TxRunnerVM,
  typeConversion: typeConversion,
  LogsManager: _logsManager.LogsManager,
  forkAt: _forkAt.forkAt
};
exports.execution = execution;

/***/ }),

/***/ 83733:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.QueryParams = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(32830));
var _createClass2 = _interopRequireDefault(__webpack_require__(59152));
var QueryParams = /*#__PURE__*/function () {
  function QueryParams() {
    (0, _classCallCheck2["default"])(this, QueryParams);
  }
  (0, _createClass2["default"])(QueryParams, [{
    key: "update",
    value: function update(params) {
      var currentParams = this.get();
      var keys = Object.keys(params);
      for (var x in keys) {
        currentParams[keys[x]] = params[keys[x]];
      }
      var queryString = '#';
      var updatedKeys = Object.keys(currentParams);
      for (var y in updatedKeys) {
        queryString += updatedKeys[y] + '=' + currentParams[updatedKeys[y]] + '&';
      }
      window.location.hash = queryString.slice(0, -1);
    }
  }, {
    key: "get",
    value: function get() {
      var qs = window.location.hash.substr(1);
      if (window.location.search.length > 0) {
        // use legacy query params instead of hash
        window.location.hash = window.location.search.substr(1);
        window.location.search = '';
      }
      var params = {};
      var parts = qs.split('&');
      for (var x in parts) {
        var keyValue = parts[x].split('=');
        if (keyValue[0] !== '') {
          params[keyValue[0]] = keyValue[1];
        }
      }
      return params;
    }
  }]);
  return QueryParams;
}();
exports.QueryParams = QueryParams;

/***/ }),

/***/ 35577:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Registry = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(32830));
var _createClass2 = _interopRequireDefault(__webpack_require__(59152));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var Registry = /*#__PURE__*/function () {
  function Registry() {
    (0, _classCallCheck2["default"])(this, Registry);
    (0, _defineProperty2["default"])(this, "state", void 0);
    this.state = {};
  }
  (0, _createClass2["default"])(Registry, [{
    key: "put",
    value: function put(entry) {
      if (this.state[entry.name]) return this.state[entry.name];
      var server = {
        // uid: serveruid,
        api: entry.api
      };
      this.state[entry.name] = {
        server: server
      };
      return server;
    }
  }, {
    key: "get",
    value: function get(name) {
      var state = this.state[name];
      if (!state) return;
      var server = state.server;
      return server;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!Registry.instance) {
        Registry.instance = new Registry();
      }
      return Registry.instance;
    }
  }]);
  return Registry;
}();
exports.Registry = Registry;
(0, _defineProperty2["default"])(Registry, "instance", void 0);

/***/ }),

/***/ 86774:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Storage = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(32830));
var _createClass2 = _interopRequireDefault(__webpack_require__(59152));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var Storage = /*#__PURE__*/function () {
  function Storage(prefix) {
    (0, _classCallCheck2["default"])(this, Storage);
    (0, _defineProperty2["default"])(this, "prefix", void 0);
    this.prefix = prefix;

    // on startup, upgrade the old storage layout
    if (typeof window !== 'undefined') {
      this.safeKeys().forEach(function (name) {
        if (name.indexOf('sol-cache-file-', 0) === 0) {
          var content = window.localStorage.getItem(name);
          window.localStorage.setItem(name.replace(/^sol-cache-file-/, 'sol:'), content);
          window.localStorage.removeItem(name);
        }
      });
    }

    // remove obsolete key
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('editor-size-cache');
    }
  }
  (0, _createClass2["default"])(Storage, [{
    key: "exists",
    value: function exists(name) {
      if (typeof window !== 'undefined') {
        return this.get(name) !== null;
      }
    }
  }, {
    key: "get",
    value: function get(name) {
      if (typeof window !== 'undefined') {
        return window.localStorage.getItem(this.prefix + name);
      }
    }
  }, {
    key: "set",
    value: function set(name, content) {
      try {
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(this.prefix + name, content);
        }
      } catch (exception) {
        return false;
      }
      return true;
    }
  }, {
    key: "remove",
    value: function remove(name) {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(this.prefix + name);
      }
      return true;
    }
  }, {
    key: "rename",
    value: function rename(originalName, newName) {
      var content = this.get(originalName);
      if (!this.set(newName, content)) {
        return false;
      }
      this.remove(originalName);
      return true;
    }
  }, {
    key: "safeKeys",
    value: function safeKeys() {
      // NOTE: this is a workaround for some browsers
      if (typeof window !== 'undefined') {
        return Object.keys(window.localStorage).filter(function (item) {
          return item !== null && item !== undefined;
        });
      }
      return [];
    }
  }, {
    key: "keys",
    value: function keys() {
      var _this = this;
      return this.safeKeys()
      // filter any names not including the prefix
      .filter(function (item) {
        return item.indexOf(_this.prefix, 0) === 0;
      })
      // remove prefix from filename and add the 'browser' path
      .map(function (item) {
        return item.substr(_this.prefix.length);
      });
    }
  }]);
  return Storage;
}();
exports.Storage = Storage;

/***/ }),

/***/ 22645:
/***/ (() => {

"use strict";


/***/ }),

/***/ 90434:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(40144)["Buffer"];


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.buildCallPath = buildCallPath;
exports.cborEncodedValueExtraction = cborEncodedValueExtraction;
exports.compareByteCode = compareByteCode;
exports.concatWithSeparator = concatWithSeparator;
exports.escapeRegExp = escapeRegExp;
exports.extractSwarmHash = extractSwarmHash;
exports.extractcborMetadata = extractcborMetadata;
exports.extractinputParameters = extractinputParameters;
exports.findCall = findCall;
exports.findClosestIndex = findClosestIndex;
exports.findLowerBound = findLowerBound;
exports.findLowerBoundValue = findLowerBoundValue;
exports.formatMemory = formatMemory;
exports.getinputParameters = getinputParameters;
exports.groupBy = groupBy;
exports.hexListFromBNs = hexListFromBNs;
exports.hexToIntArray = hexToIntArray;
exports.inputParametersExtraction = inputParametersExtraction;
exports.sha3_256 = sha3_256;
exports.swarmHashExtraction = swarmHashExtraction;
exports.swarmHashExtractionPOC31 = swarmHashExtractionPOC31;
exports.swarmHashExtractionPOC32 = swarmHashExtractionPOC32;
exports.toHexPaddedString = toHexPaddedString;
var _remixLib = __webpack_require__(37559);
var _util = __webpack_require__(35178);
var _stringSimilarity = _interopRequireDefault(__webpack_require__(80506));
var _bn = __webpack_require__(64859);
var _web3Validator = __webpack_require__(6927);
/*
 contains misc util: @TODO should be split
  - hex conversion
  - binary search
  - CALL related look up
  - sha3 calculation
  - swarm hash extraction
  - bytecode comparison
*/
/*
    ints: IntArray
  */

/**
   * Converts a hex string to an array of integers.
   */
function hexToIntArray(hexString) {
  if (hexString.slice(0, 2) === '0x') {
    hexString = hexString.slice(2);
  }
  var integers = [];
  for (var i = 0; i < hexString.length; i += 2) {
    integers.push(parseInt(hexString.slice(i, i + 2), 16));
  }
  return integers;
}

/*
    ints: list of BNs
  */
function hexListFromBNs(bnList) {
  var ret = [];
  for (var k in bnList) {
    var v = bnList[k].toString(16);
    ret.push('0x' + v.padStart(64, '0'));
  }
  return ret;
}
function toHexPaddedString(v) {
  if (v) {
    if (typeof v === 'string') {
      return v.startsWith('0x') ? v : '0x' + v;
    } else {
      return '0x' + v.toString(16).padStart(64, '0');
    }
  } else return '0x' + '0'.padStart(64, '0');
}

/*
  ints: ints: IntArray
*/
function formatMemory(mem) {
  var hexMem = (0, _util.bytesToHex)(mem).substr(2);
  var ret = [];
  for (var k = 0; k < hexMem.length; k += 32) {
    var row = hexMem.substr(k, 32);
    ret.push(row);
  }
  return ret;
}

/*
  Binary Search:
  Assumes that @arg array is sorted increasingly
  return largest i such that array[i] <= target; return -1 if array[0] > target || array is empty
*/
function findLowerBound(target, array) {
  var start = 0;
  var length = array.length;
  while (length > 0) {
    var half = length >> 1;
    var middle = start + half;
    if (array[middle] <= target) {
      length = length - 1 - half;
      start = middle + 1;
    } else {
      length = half;
    }
  }
  return start - 1;
}

/*
  Binary Search:
  Assumes that @arg array is sorted increasingly
  return largest array[i] such that array[i] <= target; return null if array[0] > target || array is empty
*/
function findLowerBoundValue(target, array) {
  var index = findLowerBound(target, array);
  return index >= 0 ? array[index] : null;
}

/*
  Binary Search:
  Assumes that @arg array is sorted increasingly
  return Return i such that |array[i] - target| is smallest among all i and -1 for an empty array.
  Returns the smallest i for multiple candidates.
*/
function findClosestIndex(target, array) {
  if (array.length === 0) {
    return -1;
  }
  var index = findLowerBound(target, array);
  if (index < 0) {
    return 0;
  } else if (index >= array.length - 1) {
    return array.length - 1;
  } else {
    var middle = (array[index] + array[index + 1]) / 2;
    return target <= middle ? index : index + 1;
  }
}

/**
  * Find the call from @args rootCall which contains @args index (recursive)
  *
  * @param {Int} index - index of the vmtrace
  * @param {Object} rootCall  - call tree, built by the trace analyser
  * @return {Object} - return the call which include the @args index
  */
function findCall(index, rootCall) {
  var ret = buildCallPath(index, rootCall);
  return ret[ret.length - 1];
}

/**
  * Find calls path from @args rootCall which leads to @args index (recursive)
  *
  * @param {Int} index - index of the vmtrace
  * @param {Object} rootCall  - call tree, built by the trace analyser
  * @return {Array} - return the calls path to @args index
  */
function buildCallPath(index, rootCall) {
  var ret = [];
  findCallInternal(index, rootCall, ret);
  return ret;
}

/**
  * sha3 the given @arg value (left pad to 32 bytes)
  *
  * @param {String} value - value to sha3
  * @return {Object} - return sha3ied value
  */
// eslint-disable-next-line camelcase
function sha3_256(value) {
  if (value.constructor && value.constructor.name === 'BigNumber' || _bn.BN.isBN(value) || (0, _web3Validator.isBigInt)(value)) {
    value = value.toString(16);
  }
  if (typeof value === 'number') {
    value = value.toString(16);
  }
  value = (0, _util.toBytes)((0, _util.addHexPrefix)(value));
  var retInBuffer = _remixLib.hash.keccak(Buffer.from((0, _util.setLengthLeft)(value, 32)));
  return (0, _util.bytesToHex)(retInBuffer);
}

/**
  * return a regex which extract the swarmhash from the bytecode.
  *
  * @return {RegEx}
  */
function swarmHashExtraction() {
  return /a165627a7a72305820([0-9a-f]{64})0029$/;
}

/**
  * return a regex which extract the swarmhash from the bytecode, from POC 0.3
  *
  * @return {RegEx}
  */
function swarmHashExtractionPOC31() {
  return /a265627a7a72315820([0-9a-f]{64})64736f6c6343([0-9a-f]{6})0032$/;
}

/**
  * return a regex which extract the swarmhash from the bytecode, from POC 0.3
  *
  * @return {RegEx}
  */
function swarmHashExtractionPOC32() {
  return /a265627a7a72305820([0-9a-f]{64})64736f6c6343([0-9a-f]{6})0032$/;
}

/**
  * return a regex which extract the cbor encoded metadata : {"ipfs": <IPFS hash>, "solc": <compiler version>} from the bytecode.
  * ref https://solidity.readthedocs.io/en/v0.6.6/metadata.html?highlight=ipfs#encoding-of-the-metadata-hash-in-the-bytecode
  * @return {RegEx}
  */
function cborEncodedValueExtraction() {
  return /64697066735822([0-9a-f]{68})64736f6c6343([0-9a-f]{6})0033$/;
}

/**
  * return a regex which extract the input parameters from the bytecode
  *
  * @return {RegEx}
  */
function inputParametersExtraction() {
  return /64697066735822[0-9a-f]{68}64736f6c6343[0-9a-f]{6}0033(.*)$/;
}
function extractcborMetadata(value) {
  var cbor = value.match(cborEncodedValueExtraction());
  if (cbor && cbor[0]) value = value.replace(cbor[0], '');
  return value;
}
function extractSwarmHash(value) {
  value = value.replace(swarmHashExtraction(), '');
  value = value.replace(swarmHashExtractionPOC31(), '');
  value = value.replace(swarmHashExtractionPOC32(), '');
  return value;
}
function extractinputParameters(value) {
  var inputsParam = getinputParameters(value);
  if (inputsParam) value = value.replace(inputsParam, '');
  return value;
}
function getinputParameters(value) {
  var regex = value.match(inputParametersExtraction());
  if (regex && regex[1]) {
    return regex[1];
  } else return '';
}

/**
  * Compare bytecode. return true if the code is equal (handle swarm hash and library references)
  * @param {String} code1 - the bytecode that is actually deployed (contains resolved library reference and a potentially different swarmhash)
  * @param {String} code2 - the bytecode generated by the compiler (contains unresolved library reference and a potentially different swarmhash)
                            this will return false if the generated bytecode is empty (abstract contract cannot be deployed)
  *
  * @return {bool}
  */
function compareByteCode(code1, code2) {
  if (code1 === code2) return true;
  if (code2 === '0x') return false; // abstract contract. see comment
  if (code1 === '0x00' || code2 === '0x00' && code1 !== code2) return false; // // This can be removed some time once YUL returns correct bytecode

  if (code2.substr(2, 46) === '7300000000000000000000000000000000000000003014') {
    // testing the following signature: PUSH20 00..00 ADDRESS EQ
    // in the context of a library, that slot contains the address of the library (pushed by the compiler to avoid calling library other than with a DELEGATECALL)
    // if code2 is not a library, well we still suppose that the comparison remain relevant even if we remove some information from `code1`
    code1 = replaceLibReference(code1, 4);
  }
  var pos = -1;
  while ((pos = code2.search(/__(.*)__/)) !== -1) {
    code2 = replaceLibReference(code2, pos);
    code1 = replaceLibReference(code1, pos);
  }
  code1 = removeImmutableReference(code1, code2);
  code1 = extractinputParameters(code1);
  code1 = extractSwarmHash(code1);
  code1 = extractcborMetadata(code1);
  code2 = extractinputParameters(code2);
  code2 = extractSwarmHash(code2);
  code2 = extractcborMetadata(code2);
  if (code1 && code2) {
    if (code1.length !== code2.length) {
      // if the length isn't the same, we have an issue with extracting the metadata hash.
      var minLength = code1.length > code2.length ? code2.length : code1.length;
      code1 = code1.substr(0, minLength - 10);
      code2 = code2.substr(0, minLength - 10);
    }
    var compare = _stringSimilarity["default"].compareTwoStrings(code1, code2);
    return compare == 1;
  }
  return false;
}
/* util extracted out from remix-ide. @TODO split this file, cause it mix real util fn with solidity related stuff ... */
function groupBy(arr, key) {
  return arr.reduce(function (sum, item) {
    var groupByVal = item[key];
    var groupedItems = sum[groupByVal] || [];
    groupedItems.push(item);
    sum[groupByVal] = groupedItems;
    return sum;
  }, {});
}
function concatWithSeparator(list, separator) {
  return list.reduce(function (sum, item) {
    return sum + item + separator;
  }, '').slice(0, -separator.length);
}
function escapeRegExp(str) {
  return str.replace(/[-[\]/{}()+?.\\^$|]/g, '\\$&');
}
function replaceLibReference(code, pos) {
  return code.substring(0, pos) + '0000000000000000000000000000000000000000' + code.substring(pos + 40);
}
function removeByIndex(code, index, length, emptyRef) {
  if (!code) return code;
  return code.slice(0, index) + emptyRef + code.slice(index + length);
}
function removeImmutableReference(code1, code2) {
  try {
    var refOccurrence = code2.match(/7f0000000000000000000000000000000000000000000000000000000000000000/g);
    if (!refOccurrence) return code1;
    var offset = 0;
    refOccurrence.map(function (value) {
      offset = code2.indexOf(value, offset);
      code1 = removeByIndex(code1, offset, value.length, '7f0000000000000000000000000000000000000000000000000000000000000000');
      offset = offset + 1;
    });
  } catch (e) {
    console.log('error removeImmutableReference', e);
  }
  return code1;
}
function findCallInternal(index, rootCall, callsPath) {
  var calls = Object.keys(rootCall.calls);
  var ret = rootCall;
  callsPath.push(rootCall);
  for (var k in calls) {
    var subCall = rootCall.calls[calls[k]];
    if (index >= subCall.start && index <= subCall["return"]) {
      findCallInternal(index, subCall, callsPath);
      break;
    }
  }
  return ret;
}

/***/ }),

/***/ 29539:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _copyToClipboard = __webpack_require__(81978);
Object.keys(_copyToClipboard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _copyToClipboard[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _copyToClipboard[key];
    }
  });
});

/***/ }),

/***/ 81978:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
var _typeof = __webpack_require__(22886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.CopyToClipboard = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15159));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(93931));
var _react = _interopRequireWildcard(__webpack_require__(47182));
var _copyToClipboard = _interopRequireDefault(__webpack_require__(93700));
__webpack_require__(24512);
var _helper = __webpack_require__(63878);
var _jsxDevRuntime = __webpack_require__(16872);
var _excluded = ["tip", "icon", "direction", "getContent", "children"];
var _jsxFileName = "/workspaces/remix-project/libs/remix-ui/clipboard/src/lib/copy-to-clipboard/copy-to-clipboard.tsx",
  _this = void 0;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var CopyToClipboard = function CopyToClipboard(props) {
  var _props$tip = props.tip,
    tip = _props$tip === void 0 ? 'Copy' : _props$tip,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? 'fa-copy' : _props$icon,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'right' : _props$direction,
    getContent = props.getContent,
    children = props.children,
    otherProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var content = props.content;
  var _useState = (0, _react.useState)(tip),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    message = _useState2[0],
    setMessage = _useState2[1];
  var copyData = function copyData() {
    try {
      if (content === '') {
        setMessage('Cannot copy empty content!');
        return;
      }
      if (typeof content !== 'string') {
        content = JSON.stringify(content, null, '\t');
      }
      (0, _copyToClipboard["default"])(content);
      setMessage('Copied');
    } catch (e) {
      console.error(e);
    }
  };
  var handleClick = function handleClick(e) {
    if (content) {
      // module `copy` keeps last copied thing in the memory, so don't show tooltip if nothing is copied, because nothing was added to memory
      copyData();
    } else {
      content = getContent && getContent();
      copyData();
    }
    e.stopPropagation();
    e.preventDefault();
  };
  var reset = function reset() {
    setTimeout(function () {
      return setMessage(tip);
    }, 500);
  };
  var childJSX = children || /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", Object.assign({
    className: "far ".concat(icon, " ml-1 p-2"),
    "aria-hidden": "true"
  }, otherProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 32
  }, _this);
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("a", {
    href: "#",
    onClick: handleClick,
    onMouseLeave: reset,
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.CustomTooltip, {
      tooltipText: message,
      tooltipId: "overlay-tooltip",
      placement: direction,
      children: childJSX
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, _this);
};
exports.CopyToClipboard = CopyToClipboard;
var _default = CopyToClipboard;
exports["default"] = _default;

/***/ }),

/***/ 63878:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _remixUiHelper = __webpack_require__(69367);
Object.keys(_remixUiHelper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _remixUiHelper[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _remixUiHelper[key];
    }
  });
});
var _bleach = __webpack_require__(90550);
Object.keys(_bleach).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _bleach[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bleach[key];
    }
  });
});
var _helperComponents = __webpack_require__(56279);
Object.keys(_helperComponents).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _helperComponents[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _helperComponents[key];
    }
  });
});
var _PluginViewWrapper = __webpack_require__(51795);
Object.keys(_PluginViewWrapper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PluginViewWrapper[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PluginViewWrapper[key];
    }
  });
});
var _customDropdown = __webpack_require__(25335);
Object.keys(_customDropdown).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _customDropdown[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _customDropdown[key];
    }
  });
});
var _customTooltip = __webpack_require__(96283);
Object.keys(_customTooltip).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _customTooltip[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _customTooltip[key];
    }
  });
});

/***/ }),

/***/ 90550:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(22886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bleach = void 0;
var he = _interopRequireWildcard(__webpack_require__(37557));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/*
 * remixBleach
 * a minimal html sanitizer
 * credits to cam@onswipe.com
 */

var bleach = {
  matcher: /<\/?([a-zA-Z0-9]+)*(.*?)\/?>/igm,
  whitelist: ['a', 'b', 'p', 'em', 'strong'],
  analyze: function analyze(html) {
    html = String(html) || '';
    var matches = [];
    var match;

    // extract all tags
    var _loop = function _loop() {
      var attrr = match[2].split(' ');
      var attrs = [];

      // extract attributes from the tag
      attrr.shift();
      attrr.forEach(function (attr) {
        attr = attr.split('=');
        var attrName = attr[0];
        var attrValue = attr.length > 1 ? attr.slice(1).join('=') : null;
        // remove quotes from attributes
        if (attrValue && attrValue.charAt(0).match(/'|"/)) attrValue = attrValue.slice(1);
        if (attrValue && attrValue.charAt(attrValue.length - 1).match(/'|"/)) attrValue = attrValue.slice(0, -1);
        attr = {
          name: attrName,
          value: attrValue
        };
        if (!attr.value) delete attr.value;
        if (attr.name) attrs.push(attr);
      });
      var tag = {
        full: match[0],
        name: match[1],
        attr: attrs
      };
      matches.push(tag);
    };
    while ((match = bleach.matcher.exec(html)) != null) {
      _loop();
    }
    return matches;
  },
  sanitize: function sanitize(html) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      mode: 'white',
      list: bleach.whitelist,
      encode_entities: false
    };
    html = String(html) || '';
    var mode = options.mode || 'white';
    var list = options.list || bleach.whitelist;
    var matches = bleach.analyze(html);
    if (mode === 'white' && list.indexOf('script') === -1 || mode === 'black' && list.indexOf('script') !== -1) {
      html = html.replace(/<script(.*?)>(.*?[\r\n])*?(.*?)(.*?[\r\n])*?<\/script>/gim, '');
    }
    if (mode === 'white' && list.indexOf('style') === -1 || mode === 'black' && list.indexOf('style') !== -1) {
      html = html.replace(/<style(.*?)>(.*?[\r\n])*?(.*?)(.*?[\r\n])*?<\/style>/gim, '');
    }
    matches.forEach(function (tag) {
      if (mode === 'white') {
        if (list.indexOf(tag.name) === -1) {
          html = html.replace(tag.full, '');
        }
      } else if (mode === 'black') {
        if (list.indexOf(tag.name) !== -1) {
          html = html.replace(tag.full, '');
        }
      } else {
        throw new Error('Unknown sanitization mode "' + mode + '"');
      }
    });
    if (options.encode_entities) html = he.encode(html);
    return html;
  }
};
exports.bleach = bleach;

/***/ }),

/***/ 51795:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
var _typeof = __webpack_require__(22886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PluginViewWrapper = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15159));
var _react = _interopRequireWildcard(__webpack_require__(47182));
var _jsxDevRuntime = __webpack_require__(16872);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var PluginViewWrapper = function PluginViewWrapper(props) {
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  (0, _react.useEffect)(function () {
    if (props.plugin.setDispatch) {
      props.plugin.setDispatch(setState);
    }
  }, []);
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
    children: state ? /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
      children: props.plugin.updateComponent(state)
    }, void 0, false) : /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {}, void 0, false)
  }, void 0, false);
};
exports.PluginViewWrapper = PluginViewWrapper;

/***/ }),

/***/ 25335:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ProxyDropdownMenu = exports.ProxyAddressToggle = exports.CustomToggle = exports.CustomMenu = exports.CustomIconsToggle = void 0;
var _react = _interopRequireDefault(__webpack_require__(47182));
var _reactIntl = __webpack_require__(24831);
var _helper = __webpack_require__(63878);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/libs/remix-ui/helper/src/lib/components/custom-dropdown.tsx",
  _this = void 0; // The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
var CustomToggle = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
    _onClick = _ref.onClick,
    icon = _ref.icon,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
    ref: ref,
    onClick: function onClick(e) {
      e.preventDefault();
      _onClick(e);
    },
    className: className.replace('dropdown-toggle', ''),
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "d-flex",
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "mr-auto text-nowrap text-truncate overflow-hidden",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), icon && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "pr-1",
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
          className: "".concat(icon, " pr-1")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
          className: "fad fa-sort-circle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
});
exports.CustomToggle = CustomToggle;
var CustomIconsToggle = /*#__PURE__*/_react["default"].forwardRef(function (_ref2, ref) {
  var _onClick2 = _ref2.onClick,
    icon = _ref2.icon,
    _ref2$className = _ref2.className,
    className = _ref2$className === void 0 ? '' : _ref2$className;
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
    ref: ref,
    onClick: function onClick(e) {
      e.preventDefault();
      _onClick2();
    },
    className: "".concat(className.replace('dropdown-toggle', ''), " mr-1 mb-0 pb-0 d-flex justify-content-end align-items-end remixuimenuicon_shadow remixuimenuicon_hamburger_menu fs-3"),
    "data-id": "workspaceMenuDropdown",
    children: icon && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.CustomTooltip, {
      placement: 'top',
      tooltipClasses: "text-nowrap text-left",
      tooltipId: "remixHamburgerTooltip",
      tooltipText: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactIntl.FormattedMessage, {
        id: "filePanel.workspaceActions"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 24
      }, _this),
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
        style: {
          fontSize: 'large'
        },
        className: "".concat(icon),
        "data-id": "workspaceDropdownMenuIcon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, _this);
});

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
exports.CustomIconsToggle = CustomIconsToggle;
var CustomMenu = /*#__PURE__*/_react["default"].forwardRef(function (_ref3, ref) {
  var children = _ref3.children,
    style = _ref3.style,
    dataId = _ref3['data-id'],
    className = _ref3.className,
    labeledBy = _ref3['aria-labelledby'];
  var height = window.innerHeight * 0.6;
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    ref: ref,
    style: style,
    className: className,
    "aria-labelledby": labeledBy,
    "data-id": dataId,
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("ul", {
      className: "overflow-auto list-unstyled mb-0",
      style: {
        maxHeight: height + 'px'
      },
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 7
  }, _this);
});
exports.CustomMenu = CustomMenu;
var ProxyAddressToggle = /*#__PURE__*/_react["default"].forwardRef(function (_ref4, ref) {
  var address = _ref4.address,
    _onClick3 = _ref4.onClick,
    _ref4$className = _ref4.className,
    className = _ref4$className === void 0 ? '' : _ref4$className,
    _onChange = _ref4.onChange;
  var intl = (0, _reactIntl.useIntl)();
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    ref: ref,
    onClick: function onClick(e) {
      e.preventDefault();
      _onClick3(e);
    },
    className: 'd-flex ' + className.replace('dropdown-toggle', ''),
    "data-id": "toggleProxyAddressDropdown",
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("input", {
      onChange: function onChange(e) {
        e.preventDefault();
        _onChange(e);
      },
      className: "udapp_input form-control",
      value: address,
      placeholder: intl.formatMessage({
        id: 'udapp.enterProxyAddress'
      }),
      style: {
        width: '100%'
      },
      "data-id": "ERC1967AddressInput"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 7
  }, _this);
});
exports.ProxyAddressToggle = ProxyAddressToggle;
var ProxyDropdownMenu = /*#__PURE__*/_react["default"].forwardRef(function (_ref5, ref) {
  var children = _ref5.children,
    style = _ref5.style,
    className = _ref5.className,
    labeledBy = _ref5['aria-labelledby'];
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    ref: ref,
    style: style,
    className: className,
    "aria-labelledby": labeledBy,
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("ul", {
      className: "list-unstyled mb-0",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 171,
    columnNumber: 7
  }, _this);
});
exports.ProxyDropdownMenu = ProxyDropdownMenu;

/***/ }),

/***/ 96283:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(22886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CustomTooltip = CustomTooltip;
var _react = _interopRequireWildcard(__webpack_require__(47182));
var _reactBootstrap = __webpack_require__(6196);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/libs/remix-ui/helper/src/lib/components/custom-tooltip.tsx";
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function CustomTooltip(_ref) {
  var children = _ref.children,
    placement = _ref.placement,
    tooltipId = _ref.tooltipId,
    tooltipClasses = _ref.tooltipClasses,
    tooltipText = _ref.tooltipText,
    tooltipTextClasses = _ref.tooltipTextClasses,
    delay = _ref.delay,
    hide = _ref.hide;
  if (typeof tooltipText !== 'string') {
    var newTooltipText = /*#__PURE__*/_react["default"].cloneElement(tooltipText, {
      className: ' bg-secondary text-wrap p-1 px-2 '
    });
    tooltipText = newTooltipText;
  }
  return !hide ? /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.OverlayTrigger, {
      placement: placement,
      overlay: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Popover, {
        id: "popover-positioned-".concat(placement),
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Popover.Content, {
          id: !tooltipId ? "".concat(tooltipText, "Tooltip") : tooltipId,
          style: {
            minWidth: 'fit-content'
          },
          className: 'text-wrap p-1 px-2 bg-secondary w-100' + tooltipClasses,
          children: typeof tooltipText === 'string' ? /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
            className: 'text-wrap p-1 px-2 bg-secondary ' + {
              tooltipTextClasses: tooltipTextClasses
            },
            children: tooltipText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 52
          }, this) : tooltipText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }, this) : /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
      children: children
    }, void 0, false)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ 56279:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RenderIf = RenderIf;
exports.RenderIfNot = RenderIfNot;
exports.upgradeWithProxyMsg = exports.upgradeReportMsg = exports.unavailableProxyLayoutMsg = exports.storageFullMessage = exports.sourceVerificationNotAvailableToastMsg = exports.recursivePasteToastMsg = exports.notFoundToastMsg = exports.logBuilder = exports.localCompilationToastMsg = exports.fileChangedToastMsg = exports.envChangeNotification = exports.deployWithProxyMsg = exports.compilingToastMsg = exports.compilerConfigChangedToastMsg = exports.compileToastMsg = exports.compilationFinishedToastMsg = exports.cancelUpgradeMsg = exports.cancelProxyMsg = void 0;
var _react = _interopRequireDefault(__webpack_require__(47182));
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/libs/remix-ui/helper/src/lib/helper-components.tsx",
  _this = void 0;
var fileChangedToastMsg = function fileChangedToastMsg(from, path) {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
      className: "fas fa-exclamation-triangle text-danger mr-1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
      children: [from, " ", /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
        className: "font-weight-bold text-warning",
        children: "is modifying"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 14
      }, _this), " ", path]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, _this);
};
exports.fileChangedToastMsg = fileChangedToastMsg;
var compilerConfigChangedToastMsg = function compilerConfigChangedToastMsg(from, value) {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("b", {
      children: from
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, _this), " is updating the ", /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("b", {
      children: "Solidity compiler configuration"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 35
    }, _this), ".", /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("pre", {
      className: "text-left",
      children: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 74
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, _this);
};
exports.compilerConfigChangedToastMsg = compilerConfigChangedToastMsg;
var compileToastMsg = function compileToastMsg(from, fileName) {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("b", {
      children: from
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, _this), " is requiring to compile ", /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("b", {
      children: fileName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 43
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, _this);
};
exports.compileToastMsg = compileToastMsg;
var compilingToastMsg = function compilingToastMsg(settings) {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("b", {
      children: "Recompiling and debugging with params"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("pre", {
      className: "text-left",
      children: settings
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }, _this);
};
exports.compilingToastMsg = compilingToastMsg;
var compilationFinishedToastMsg = function compilationFinishedToastMsg() {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("b", {
      children: "Compilation failed..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, _this), " continuing ", /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
      children: "without"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 45
    }, _this), " source code debugging."]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }, _this);
};
exports.compilationFinishedToastMsg = compilationFinishedToastMsg;
var notFoundToastMsg = function notFoundToastMsg(address) {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("b", {
      children: ["Contract ", address, " not found in source code repository"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }, _this), " continuing ", /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
      children: "without"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 78
    }, _this), " source code debugging."]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 3
  }, _this);
};
exports.notFoundToastMsg = notFoundToastMsg;
var localCompilationToastMsg = function localCompilationToastMsg() {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("b", {
      children: "Using compilation result from Solidity module"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 3
  }, _this);
};
exports.localCompilationToastMsg = localCompilationToastMsg;
var sourceVerificationNotAvailableToastMsg = function sourceVerificationNotAvailableToastMsg() {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("b", {
      children: "Source verification plugin not activated or not available."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }, _this), " continuing ", /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
      children: "without"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 82
    }, _this), " source code debugging."]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 3
  }, _this);
};
exports.sourceVerificationNotAvailableToastMsg = sourceVerificationNotAvailableToastMsg;
var envChangeNotification = function envChangeNotification(env, from) {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
      className: "fas fa-exclamation-triangle text-danger mr-1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
      children: [from + ' ', /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
        className: "font-weight-bold text-warning",
        children: "set your environment to"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }, _this), " ", env && env.context]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 3
  }, _this);
};
exports.envChangeNotification = envChangeNotification;
var storageFullMessage = function storageFullMessage() {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
      className: "fas fa-exclamation-triangle text-danger mr-1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
      className: "font-weight-bold",
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
        children: "Cannot save this file due to full LocalStorage. Backup existing files and free up some space."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 3
  }, _this);
};
exports.storageFullMessage = storageFullMessage;
var recursivePasteToastMsg = function recursivePasteToastMsg() {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: "File(s) to paste is an ancestor of the destination folder"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 45
  }, _this);
};
exports.recursivePasteToastMsg = recursivePasteToastMsg;
var logBuilder = function logBuilder(msg) {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("pre", {
    children: msg
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 10
  }, _this);
};
exports.logBuilder = logBuilder;
var cancelProxyMsg = function cancelProxyMsg() {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("b", {
      children: "Proxy deployment cancelled."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 3
  }, _this);
};
exports.cancelProxyMsg = cancelProxyMsg;
var cancelUpgradeMsg = function cancelUpgradeMsg() {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("b", {
      children: "Upgrade with proxy cancelled."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 3
  }, _this);
};
exports.cancelUpgradeMsg = cancelUpgradeMsg;
var deployWithProxyMsg = function deployWithProxyMsg() {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("b", {
      children: "Deploy with Proxy"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }, _this), " will initiate two (2) transactions:", /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("ol", {
      className: "pl-3",
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("li", {
        children: "Deploying the implementation contract"
      }, "impl-contract", false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("li", {
        children: "Deploying an ERC1967 proxy contract"
      }, "proxy-contract", false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 3
  }, _this);
};
exports.deployWithProxyMsg = deployWithProxyMsg;
var upgradeWithProxyMsg = function upgradeWithProxyMsg() {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("b", {
      children: "Upgrade with Proxy"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }, _this), " will initiate two (2) transactions:", /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("ol", {
      className: "pl-3",
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("li", {
        children: "Deploying the new implementation contract"
      }, "new-impl-contract", false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("li", {
        children: "Updating the proxy contract with the address of the new implementation contract"
      }, "update-proxy-contract", false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 3
  }, _this);
};
exports.upgradeWithProxyMsg = upgradeWithProxyMsg;
var unavailableProxyLayoutMsg = function unavailableProxyLayoutMsg() {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
      children: ["The previous contract implementation is NOT available for an upgrade comparison", /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 7
      }, _this), " A new storage layout will be saved for future upgrades."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 3
  }, _this);
};
exports.unavailableProxyLayoutMsg = unavailableProxyLayoutMsg;
var upgradeReportMsg = function upgradeReportMsg(report) {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "py-2 ml-2 mb-1 align-self-end mb-2 d-flex",
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
        className: "align-self-center pl-4 mt-1",
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
          className: "pr-2 text-warning far fa-exclamation-triangle",
          "aria-hidden": "true",
          style: {
            fontSize: 'xxx-large',
            fontWeight: 'lighter'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "d-flex flex-column",
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
          className: "pl-4 mt-1",
          children: "The storage layout of new implementation is NOT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
          className: "pl-4 mt-1",
          children: "compatible with the previous implementation."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
          className: "pl-4 mt-1",
          children: "Your contract's storage may be partially or fully erased!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "pl-4 text-danger",
      children: report.explain()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 3
  }, _this);
};
exports.upgradeReportMsg = upgradeReportMsg;
function RenderIf(_ref) {
  var condition = _ref.condition,
    children = _ref.children;
  return condition ? children : null;
}
function RenderIfNot(_ref2) {
  var condition = _ref2.condition,
    children = _ref2.children;
  return condition ? null : children;
}

/***/ }),

/***/ 69367:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.shortenProxyAddress = exports.shortenHexData = exports.shortenDate = exports.shortenAddress = exports.joinPath = exports.isValidHash = exports.isNumeric = exports.isHexadecimal = exports.is0XPrefixed = exports.getPathIcon = exports.extractParentFromKey = exports.extractNameFromKey = exports.createNonClashingTitle = exports.createNonClashingNameAsync = exports.checkSpecialChars = exports.checkSlash = exports.addressToString = exports.addSlash = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(59454));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(91544));
var _util = __webpack_require__(35178);
var extractNameFromKey = function extractNameFromKey(key) {
  if (!key) return;
  var keyPath = key.split('/');
  return keyPath[keyPath.length - 1];
};
exports.extractNameFromKey = extractNameFromKey;
var extractParentFromKey = function extractParentFromKey(key) {
  if (!key) return;
  var keyPath = key.split('/');
  keyPath.pop();
  return keyPath.join('/');
};
exports.extractParentFromKey = extractParentFromKey;
var checkSpecialChars = function checkSpecialChars(name) {
  return name.match(/[:*?"<>\\'|]/) != null;
};
exports.checkSpecialChars = checkSpecialChars;
var checkSlash = function checkSlash(name) {
  return name.match(/\//) != null;
};
exports.checkSlash = checkSlash;
var createNonClashingNameAsync = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(name, fileManager) {
    var prefix,
      _counter,
      ext,
      reg,
      split,
      exist,
      isDuplicate,
      counter,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            prefix = _args.length > 2 && _args[2] !== undefined ? _args[2] : '';
            if (!name) name = 'Undefined';
            ext = 'sol';
            reg = /(.*)\.([^.]+)/g;
            split = reg.exec(name);
            if (split) {
              name = split[1];
              ext = split[2];
            }
            exist = true;
          case 7:
            _context.next = 9;
            return fileManager.exists(name + (_counter || '') + prefix + '.' + ext);
          case 9:
            isDuplicate = _context.sent;
            if (isDuplicate) _counter = (_counter || 0) + 1;else exist = false;
          case 11:
            if (exist) {
              _context.next = 7;
              break;
            }
          case 12:
            counter = _counter || '';
            return _context.abrupt("return", name + counter + prefix + '.' + ext);
          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function createNonClashingNameAsync(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createNonClashingNameAsync = createNonClashingNameAsync;
var createNonClashingTitle = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(name, fileManager) {
    var _counter, exist, isDuplicate, counter;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!name) name = 'Undefined';
            exist = true;
          case 2:
            _context2.next = 4;
            return fileManager.exists(name + (_counter || ''));
          case 4:
            isDuplicate = _context2.sent;
            if (isDuplicate) _counter = (_counter || 0) + 1;else exist = false;
          case 6:
            if (exist) {
              _context2.next = 2;
              break;
            }
          case 7:
            counter = _counter || '';
            return _context2.abrupt("return", name + counter);
          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function createNonClashingTitle(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createNonClashingTitle = createNonClashingTitle;
var joinPath = function joinPath() {
  for (var _len = arguments.length, paths = new Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }
  paths = paths.filter(function (value) {
    return value !== '';
  }).map(function (path) {
    return path.replace(/^\/|\/$/g, '');
  }); // remove first and last slash)
  if (paths.length === 1) return paths[0];
  return paths.join('/');
};
exports.joinPath = joinPath;
var getPathIcon = function getPathIcon(path) {
  return path.endsWith('.txt') ? 'far fa-file-alt' : path.endsWith('.md') ? 'fab fa-markdown' : path.endsWith('.sol') ? 'fa-kit fa-solidity-mono' : path.endsWith('.js') ? 'fab fa-js' : path.endsWith('.json') ? 'small fas fa-brackets-curly' : path.endsWith('.vy') ? 'small fa-kit fa-vyper2' : path.endsWith('.lex') ? 'fa-kit fa-lexon' : path.endsWith('ts') ? 'small fa-kit fa-ts-logo' : path.endsWith('.tsc') ? 'fad fa-brackets-curly' : path.endsWith('.cairo') ? 'small fa-kit fa-cairo' : path.endsWith('.circom') ? 'fa-kit fa-circom' : 'far fa-file';
};
exports.getPathIcon = getPathIcon;
var isNumeric = function isNumeric(value) {
  return /^\+?(0|[1-9]\d*)$/.test(value);
};
exports.isNumeric = isNumeric;
var shortenAddress = function shortenAddress(address, etherBalance) {
  var len = address.length;
  return address.slice(0, 5) + '...' + address.slice(len - 5, len) + (etherBalance ? ' (' + etherBalance.toString() + ' ether)' : '');
};
exports.shortenAddress = shortenAddress;
var addressToString = function addressToString(address) {
  if (!address) return null;
  if (typeof address !== 'string') {
    address = (0, _util.bytesToHex)(address);
  }
  if (address.indexOf('0x') === -1) {
    address = '0x' + address;
  }
  return (0, _util.toChecksumAddress)(address);
};
exports.addressToString = addressToString;
var is0XPrefixed = function is0XPrefixed(value) {
  return value.substr(0, 2) === '0x';
};
exports.is0XPrefixed = is0XPrefixed;
var isHexadecimal = function isHexadecimal(value) {
  return /^[0-9a-fA-F]+$/.test(value) && value.length % 2 === 0;
};
exports.isHexadecimal = isHexadecimal;
var isValidHash = function isValidHash(hash) {
  // 0x prefixed, hexadecimal, 64digit
  var hexValue = hash.slice(2, hash.length);
  return is0XPrefixed(hash) && /^[0-9a-fA-F]{64}$/.test(hexValue);
};
exports.isValidHash = isValidHash;
var shortenHexData = function shortenHexData(data) {
  if (!data) return '';
  if (data.length < 5) return data;
  var len = data.length;
  return data.slice(0, 5) + '...' + data.slice(len - 5, len);
};
exports.shortenHexData = shortenHexData;
var addSlash = function addSlash(file) {
  if (!file.startsWith('/')) file = '/' + file;
  return file;
};
exports.addSlash = addSlash;
var shortenProxyAddress = function shortenProxyAddress(address) {
  var len = address.length;
  return address.slice(0, 5) + '...' + address.slice(len - 5, len);
};
exports.shortenProxyAddress = shortenProxyAddress;
var shortenDate = function shortenDate(dateString) {
  var date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric"
  }) + ', ' + date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit'
  });
};
exports.shortenDate = shortenDate;

/***/ }),

/***/ 24512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 61755:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 32234:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 29005:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 83397:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 33196:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 38087:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 50936:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 27464:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 39415:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 30633:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 20395:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 30488:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 87374:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 29285:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 12858:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 16866:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 6024:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 15862:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 57267:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 59255:
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(2002)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map