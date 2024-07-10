(self["webpackChunksolhint"] = self["webpackChunksolhint"] || []).push([["main"],{

/***/ 2424:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 2424;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 2070:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 2070;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 8803:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 8803;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 1753:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = App;
var _react = _interopRequireDefault(__webpack_require__(7182));
var _SolhintPluginClient = __webpack_require__(2899);
var _jsxDevRuntime = __webpack_require__(6872);
var client = new _SolhintPluginClient.SolHint();
function App() {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {}, void 0, false);
}

/***/ }),

/***/ 2899:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SolHint = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(9454));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(5685));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(1544));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2830));
var _createClass2 = _interopRequireDefault(__webpack_require__(9152));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(9451));
var _inherits2 = _interopRequireDefault(__webpack_require__(9346));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5268));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3910));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(6604));
var _plugin = __webpack_require__(7428);
var _pluginWebview = __webpack_require__(130);
var _solhint = __webpack_require__(2982);
var _configFile = __webpack_require__(9276);
var _bestPractises = _interopRequireDefault(__webpack_require__(6309));
var _naming = _interopRequireDefault(__webpack_require__(6453));
var _order = _interopRequireDefault(__webpack_require__(6097));
var _security = _interopRequireDefault(__webpack_require__(5249));
var _deprecations = _interopRequireDefault(__webpack_require__(6441));
var _miscellaneous = _interopRequireDefault(__webpack_require__(445));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } // eslint-disable @nrwl/nx/enforce-module-boundaries
var Config = "{\n  \"extends\": \"solhint:recommended\",\n  \"plugins\": [],\n  \"rules\": {\n    \"avoid-suicide\": \"error\",\n    \"avoid-sha3\": \"warn\"\n  }\n}";
var SolHint = /*#__PURE__*/function (_PluginClient) {
  (0, _inherits2["default"])(SolHint, _PluginClient);
  var _super = _createSuper(SolHint);
  function SolHint() {
    var _this;
    (0, _classCallCheck2["default"])(this, SolHint);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "triggerLinter", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "severity", {
      2: 'error',
      3: 'warning'
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rules", {
      'solhint:recommended': function solhintRecommended() {
        var enabledRules = {};
        _this.coreRules().forEach(function (rule) {
          if (!rule.meta.deprecated && rule.meta.recommended) {
            enabledRules[rule.ruleId] = rule.meta.defaultSetup;
          }
        });
        return enabledRules;
      },
      'solhint:all': function solhintAll() {
        var enabledRules = {};
        _this.coreRules().forEach(function (rule) {
          if (!rule.meta.deprecated) {
            enabledRules[rule.ruleId] = rule.meta.defaultSetup;
          }
        });
        return enabledRules;
      },
      'solhint:default': function solhintDefault() {
        var enabledRules = {};
        _this.coreRules().forEach(function (rule) {
          if (!rule.meta.deprecated && rule.meta.isDefault) {
            enabledRules[rule.ruleId] = rule.meta.defaultSetup;
          }
        });
        return enabledRules;
      }
    });
    _this.methods = ['lintContract', 'lintOnCompilation', 'lintContractCustomAction', 'lint'];
    (0, _pluginWebview.createClient)((0, _assertThisInitialized2["default"])(_this));
    _this.onload().then( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.lintOnCompilation();
            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    return _this;
  }
  (0, _createClass2["default"])(SolHint, [{
    key: "createConfigFile",
    value: function () {
      var _createConfigFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.call('fileManager', 'writeFile', '.solhint.json', Config);
              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function createConfigFile() {
        return _createConfigFile.apply(this, arguments);
      }
      return createConfigFile;
    }()
  }, {
    key: "lintOnCompilation",
    value: function () {
      var _lintOnCompilation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _this2 = this;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.triggerLinter) {
                  _context4.next = 2;
                  break;
                }
                return _context4.abrupt("return");
              case 2:
                this.on('solidity', 'compilationFinished', /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(fileName, source, languageVersion, data) {
                    var hints;
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return _this2.lint(fileName);
                          case 2:
                            hints = _context3.sent;
                            console.log('after compile', {
                              hints: hints
                            });
                            _this2.emit('lintOnCompilationFinished', hints);
                          case 5:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));
                  return function (_x, _x2, _x3, _x4) {
                    return _ref2.apply(this, arguments);
                  };
                }());
                this.triggerLinter = false;
              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function lintOnCompilation() {
        return _lintOnCompilation.apply(this, arguments);
      }
      return lintOnCompilation;
    }()
    /**
     * method to handle context menu action in file explorer for
     * solhint plugin
     * @param action interface CustomAction
     */
  }, {
    key: "lintContractCustomAction",
    value: function () {
      var _lintContractCustomAction = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(action) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.triggerLinter = true;
                _context5.next = 3;
                return this.call('solidity', 'compile', action.path[0]);
              case 3:
                _context5.next = 5;
                return this.lintContract(action.path[0]);
              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function lintContractCustomAction(_x5) {
        return _lintContractCustomAction.apply(this, arguments);
      }
      return lintContractCustomAction;
    }()
  }, {
    key: "lintContract",
    value: function () {
      var _lintContract = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(file) {
        var hints;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.lint(file);
              case 2:
                hints = _context6.sent;
                this.emit('lintingFinished', hints);
              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function lintContract(_x6) {
        return _lintContract.apply(this, arguments);
      }
      return lintContract;
    }()
  }, {
    key: "lint",
    value: function () {
      var _lint = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(fileName) {
        var _this3 = this;
        var content, configContent, configContentObj, rulesObj, reporters, reports, hints;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.call('fileManager', 'readFile', fileName);
              case 2:
                content = _context7.sent;
                configContent = Config;
                _context7.next = 6;
                return this.call('fileManager', 'exists', '.solhint.json');
              case 6:
                if (!_context7.sent) {
                  _context7.next = 10;
                  break;
                }
                _context7.next = 9;
                return this.call('fileManager', 'readFile', '.solhint.json');
              case 9:
                configContent = _context7.sent;
              case 10:
                configContentObj = JSON.parse(configContent); // apply the extend property
                rulesObj = (0, _configFile.applyExtends)(configContentObj, function (path) {
                  return _this3.rules[path]();
                });
                configContentObj.rules = Object.assign({}, rulesObj, configContentObj.rules);
                configContentObj["extends"] = [];
                reporters = (0, _solhint.processStr)(content, configContentObj);
                reports = reporters.reports;
                hints = reports.map(function (report) {
                  return {
                    formattedMessage: "".concat(report.message, "\n ").concat(report.fix ? report.fix : ''),
                    type: _this3.severity[report.severity] || 'error',
                    column: report.column,
                    line: report.line - 1,
                    message: report.message,
                    ruleId: report.ruleId,
                    severity: report.severity,
                    fix: report.fix
                  };
                });
                this.emit('lintingFinished', hints);
                return _context7.abrupt("return", hints);
              case 19:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
      function lint(_x7) {
        return _lint.apply(this, arguments);
      }
      return lint;
    }()
  }, {
    key: "coreRules",
    value: function coreRules() {
      return [].concat((0, _toConsumableArray2["default"])((0, _bestPractises["default"])()), (0, _toConsumableArray2["default"])((0, _deprecations["default"])()), (0, _toConsumableArray2["default"])((0, _miscellaneous["default"])()), (0, _toConsumableArray2["default"])((0, _naming["default"])()), (0, _toConsumableArray2["default"])((0, _order["default"])()), (0, _toConsumableArray2["default"])((0, _security["default"])()));
    }
  }]);
  return SolHint;
}(_plugin.PluginClient);
exports.SolHint = SolHint;

/***/ }),

/***/ 2002:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7085);
var _react = _interopRequireDefault(__webpack_require__(7182));
var _client = __webpack_require__(8244);
var _App = _interopRequireDefault(__webpack_require__(1753));
var _jsxDevRuntime = __webpack_require__(6872);
var _jsxFileName = "/workspaces/remix-project/apps/solhint/src/main.tsx";
var container = document.getElementById('root');
if (container) {
  (0, _client.createRoot)(container).render( /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_react["default"].StrictMode, {
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_App["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 32
  }, void 0));
}

/***/ }),

/***/ 5074:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3947:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3142:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 703:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2535:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3068:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3710:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 5246:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 7863:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8720:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 1504:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 9616:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 6982:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8119:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 4606:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 6626:
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