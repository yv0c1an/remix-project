(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ 1753:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7085);
var _typeof = __webpack_require__(2886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.client = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(9454));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(1544));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7794));
var _react = _interopRequireWildcard(__webpack_require__(7182));
__webpack_require__(661);
var _docgenClient = __webpack_require__(7883);
var _jsxDevRuntime = __webpack_require__(6872);
var _jsxFileName = "/workspaces/remix-project/apps/doc-gen/src/app/App.tsx",
  _this = void 0;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var client = new _docgenClient.DocGenClient();
exports.client = client;
var App = function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var _useState = (0, _react.useState)('dark'),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    themeType = _useState2[0],
    setThemeType = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    hasBuild = _useState4[0],
    setHasBuild = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    fileName = _useState6[0],
    setFileName = _useState6[1];
  (0, _react.useEffect)(function () {
    var watchThemeSwitch = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                client.eventEmitter.on('themeChanged', function (theme) {
                  setThemeType(theme);
                });
                client.eventEmitter.on('compilationFinished', function (build, fileName) {
                  setHasBuild(true);
                  setFileName(fileName);
                });
                client.eventEmitter.on('docsGenerated', function (docs) {});
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function watchThemeSwitch() {
        return _ref.apply(this, arguments);
      };
    }();
    watchThemeSwitch();
  }, []);
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    className: "p-3",
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("h5", {
      className: "h-5 mb-3",
      children: "Compile a Solidity contract and generate its documentation as Markdown. (Right-click on a contract in the File Explorer and select \"Generate Docs\" from the context menu.)."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), fileName && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "border-bottom border-top px-2 py-3 justify-center align-items-center d-flex",
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("h6", {
        children: ["File: ", fileName]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, _this), hasBuild && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
      className: "btn btn-primary btn-block mt-4",
      onClick: function onClick() {
        return client.generateDocs();
      },
      children: "Generate Docs"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};
var _default = App;
exports["default"] = _default;

/***/ }),

/***/ 7883:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DocGenClient = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(9454));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(1544));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2830));
var _createClass2 = _interopRequireDefault(__webpack_require__(9152));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(9451));
var _inherits2 = _interopRequireDefault(__webpack_require__(9601));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(7933));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3910));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(6604));
var _plugin = __webpack_require__(481);
var _pluginWebview = __webpack_require__(8522);
var _events = _interopRequireDefault(__webpack_require__(3683));
var _config = __webpack_require__(9786);
var _site = __webpack_require__(8326);
var _templates = __webpack_require__(3337);
var _render = __webpack_require__(8931);
var _normalizeContractPath = __webpack_require__(1397);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /* eslint-disable @typescript-eslint/no-explicit-any */
var DocGenClient = /*#__PURE__*/function (_PluginClient) {
  (0, _inherits2["default"])(DocGenClient, _PluginClient);
  var _super = _createSuper(DocGenClient);
  function DocGenClient() {
    var _this;
    (0, _classCallCheck2["default"])(this, DocGenClient);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "currentTheme", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "eventEmitter", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "build", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "docs", []);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fileName", '');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "contractPath", '');
    _this.eventEmitter = new _events["default"]();
    _this.methods = ['generateDocs', 'openDocs', 'generateDocsCustomAction'];
    (0, _pluginWebview.createClient)((0, _assertThisInitialized2["default"])(_this));
    _this.onload().then( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.setListeners();
            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    return _this;
  }
  (0, _createClass2["default"])(DocGenClient, [{
    key: "setListeners",
    value: function () {
      var _setListeners = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _this2 = this;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.call('theme', 'currentTheme');
              case 2:
                this.currentTheme = _context2.sent;
                this.on('theme', 'themeChanged', function (theme) {
                  _this2.currentTheme = theme;
                  _this2.eventEmitter.emit('themeChanged', _this2.currentTheme);
                });
                this.eventEmitter.emit('themeChanged', this.currentTheme);
                this.on('solidity', 'compilationFinished', function (fileName, source, languageVersion, data) {
                  var input = {
                    sources: source.sources
                  };
                  var output = {
                    sources: data.sources
                  };
                  _this2.build = {
                    input: input,
                    output: output
                  };
                  var segmentedPathList = (0, _normalizeContractPath.normalizeContractPath)(fileName);
                  _this2.fileName = segmentedPathList[segmentedPathList.length - 1];
                  _this2.contractPath = segmentedPathList[0];
                  _this2.eventEmitter.emit('compilationFinished', _this2.build, _this2.fileName);
                });
              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function setListeners() {
        return _setListeners.apply(this, arguments);
      }
      return setListeners;
    }()
  }, {
    key: "generateDocsCustomAction",
    value: function () {
      var _generateDocsCustomAction = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(action) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.call('solidity', 'compile', action.path[0]);
              case 2:
                _context3.next = 4;
                return this.generateDocs();
              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function generateDocsCustomAction(_x) {
        return _generateDocsCustomAction.apply(this, arguments);
      }
      return generateDocsCustomAction;
    }()
  }, {
    key: "docgen",
    value: function () {
      var _docgen = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(builds, userConfig) {
        var _templates$properties;
        var config, templates, site, renderedSite, docs, _iterator, _step, _step$value, id, contents, temp, newFileName;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                config = Object.assign({}, _config.defaults, userConfig);
                config.sourcesDir = this.contractPath !== config.sourcesDir ? this.contractPath : config.sourcesDir;
                _context4.next = 4;
                return (0, _templates.loadTemplates)(config.theme, config.root, config.templates);
              case 4:
                templates = _context4.sent;
                site = (0, _site.buildSite)(builds, config, (_templates$properties = templates.properties) !== null && _templates$properties !== void 0 ? _templates$properties : {});
                renderedSite = (0, _render.render)(site, templates, config.collapseNewlines);
                docs = [];
                _iterator = _createForOfIteratorHelper(renderedSite);
                _context4.prev = 9;
                _iterator.s();
              case 11:
                if ((_step = _iterator.n()).done) {
                  _context4.next = 20;
                  break;
                }
                _step$value = _step.value, id = _step$value.id, contents = _step$value.contents;
                temp = "".concat(this.fileName.split('.')[0], ".").concat(id.split('.')[1]);
                newFileName = "docs/".concat(temp);
                _context4.next = 17;
                return this.call('fileManager', 'setFile', newFileName, contents);
              case 17:
                docs.push(newFileName);
              case 18:
                _context4.next = 11;
                break;
              case 20:
                _context4.next = 25;
                break;
              case 22:
                _context4.prev = 22;
                _context4.t0 = _context4["catch"](9);
                _iterator.e(_context4.t0);
              case 25:
                _context4.prev = 25;
                _iterator.f();
                return _context4.finish(25);
              case 28:
                this.eventEmitter.emit('docsGenerated', docs);
                this.emit('docgen', 'docsGenerated', docs);
                this.docs = docs;
                _context4.next = 33;
                return this.openDocs(docs);
              case 33:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[9, 22, 25, 28]]);
      }));
      function docgen(_x2, _x3) {
        return _docgen.apply(this, arguments);
      }
      return docgen;
    }()
  }, {
    key: "openDocs",
    value: function () {
      var _openDocs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(docs) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.call('manager', 'activatePlugin', 'doc-viewer');
              case 2:
                _context5.next = 4;
                return this.call('tabs', 'focus', 'doc-viewer');
              case 4:
                _context5.next = 6;
                return this.call('doc-viewer', 'viewDocs', docs);
              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function openDocs(_x4) {
        return _openDocs.apply(this, arguments);
      }
      return openDocs;
    }()
  }, {
    key: "generateDocs",
    value: function () {
      var _generateDocs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var _this3 = this;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.eventEmitter.on('compilationFinished', /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(build, fileName) {
                    return _regenerator["default"].wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            _context6.next = 2;
                            return _this3.docgen([build]);
                          case 2:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }));
                  return function (_x5, _x6) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
      function generateDocs() {
        return _generateDocs.apply(this, arguments);
      }
      return generateDocs;
    }()
  }]);
  return DocGenClient;
}(_plugin.PluginClient);
exports.DocGenClient = DocGenClient;

/***/ }),

/***/ 9437:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.eq = void 0;
exports.formatVariable = formatVariable;
exports.joinLines = joinLines;
exports.slug = exports.names = void 0;
exports.trim = trim;
exports.typedParams = void 0;
function trim(text) {
  if (typeof text === 'string') {
    return text.trim();
  }
}
function joinLines(text) {
  if (typeof text === 'string') {
    return text.replace(/\n+/g, ' ');
  }
}

/**
 * Format a variable as its type followed by its name, if available.
 */
function formatVariable(v) {
  var _v$typeName;
  return [(_v$typeName = v.typeName) == null ? void 0 : _v$typeName.typeDescriptions.typeString].concat(v.name || []).join(' ');
}
var eq = function eq(a, b) {
  return a === b;
};
exports.eq = eq;
var slug = function slug(str) {
  if (str === undefined) {
    throw new Error('Missing argument');
  }
  return str.replace(/\W/g, '-');
};
exports.slug = slug;
var names = function names(params) {
  return params.map(function (p) {
    return p.name;
  }).join(', ');
};
exports.names = names;
var typedParams = function typedParams(params) {
  return params == null ? void 0 : params.map(function (p) {
    return "".concat(p.type).concat(p.indexed ? ' indexed' : '').concat(p.name ? ' ' + p.name : '');
  }).join(', ');
};
exports.typedParams = typedParams;

/***/ }),

/***/ 1294:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.anchor = anchor;
exports.errors = errors;
exports.events = events;
exports.fullName = fullName;
exports.functions = functions;
exports.hasevents = hasevents;
exports.hasfunctions = hasfunctions;
exports.inheritance = inheritance;
exports.inheritedfunctions = inheritedfunctions;
exports.items = items;
exports.modifiers = modifiers;
exports.name = name;
exports.natspec = natspec;
exports.params = params;
exports.returns = returns;
exports.signature = signature;
exports.type = type;
exports.types = types;
exports.variables = variables;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(5627));
var _utils = __webpack_require__(7759);
var _natspec = __webpack_require__(722);
var _site = __webpack_require__(8326);
var _docItem = __webpack_require__(2040);
var _helpers = __webpack_require__(9437);
var _itemType = __webpack_require__(6368);
function type(_ref) {
  var item = _ref.item;
  return (0, _itemType.itemType)(item);
}
function natspec(_ref2) {
  var item = _ref2.item;
  return (0, _natspec.parseNatspec)(item);
}
function name(_ref3, original) {
  var item = _ref3.item;
  if (item.nodeType === 'FunctionDefinition') {
    return item.kind === 'function' ? original : item.kind;
  } else {
    return original;
  }
}
function fullName(_ref4) {
  var item = _ref4.item,
    contract = _ref4.contract;
  if (contract) {
    return "".concat(contract.name, ".").concat(item.name);
  } else {
    return "".concat(item.name);
  }
}
function signature(_ref5) {
  var item = _ref5.item;
  switch (item.nodeType) {
    case 'ContractDefinition':
      return undefined;
    case 'FunctionDefinition':
      {
        var kind = item.kind,
          _name = item.name;
        var _params = item.parameters.parameters;
        var _returns = item.returnParameters.parameters;
        var head = kind === 'function' || kind === 'freeFunction' ? [kind, _name].join(' ') : kind;
        var res = ["".concat(head, "(").concat(_params.map(_helpers.formatVariable).join(', '), ")"), item.visibility];
        if (item.stateMutability !== 'nonpayable') {
          res.push(item.stateMutability);
        }
        if (item.virtual) {
          res.push('virtual');
        }
        if (_returns.length > 0) {
          res.push("returns (".concat(_returns.map(_helpers.formatVariable).join(', '), ")"));
        }
        return res.join(' ');
      }
    case 'EventDefinition':
      {
        var _params2 = item.parameters.parameters;
        return "event ".concat(item.name, "(").concat(_params2.map(_helpers.formatVariable).join(', '), ")");
      }
    case 'ErrorDefinition':
      {
        var _params3 = item.parameters.parameters;
        return "error ".concat(item.name, "(").concat(_params3.map(_helpers.formatVariable).join(', '), ")");
      }
    case 'ModifierDefinition':
      {
        var _params4 = item.parameters.parameters;
        return "modifier ".concat(item.name, "(").concat(_params4.map(_helpers.formatVariable).join(', '), ")");
      }
    case 'VariableDeclaration':
      return (0, _helpers.formatVariable)(item);
  }
}
;
function getParams(params, natspec) {
  return params.parameters.map(function (p, i) {
    var _natspec$find;
    return Object.assign({}, p, {
      type: p.typeDescriptions.typeString,
      natspec: natspec == null ? void 0 : (_natspec$find = natspec.find(function (q, j) {
        return q.name === undefined ? i === j : p.name === q.name;
      })) == null ? void 0 : _natspec$find.description
    });
  });
}
function params(_ref6) {
  var item = _ref6.item;
  if ('parameters' in item) {
    return getParams(item.parameters, natspec(item[_site.DOC_ITEM_CONTEXT]).params);
  }
}
function returns(_ref7) {
  var item = _ref7.item;
  if ('returnParameters' in item) {
    return getParams(item.returnParameters, natspec(item[_site.DOC_ITEM_CONTEXT]).returns);
  }
}
function items(_ref8) {
  var item = _ref8.item;
  return item.nodeType === 'ContractDefinition' ? item.nodes.filter((0, _utils.isNodeType)(_docItem.docItemTypes)).filter(function (n) {
    return !('visibility' in n) || n.visibility !== 'private';
  }) : undefined;
}
function functions(_ref9) {
  var item = _ref9.item;
  return (0, _toConsumableArray2["default"])((0, _utils.findAll)('FunctionDefinition', item)).filter(function (f) {
    return f.visibility !== 'private';
  });
}
function events(_ref10) {
  var item = _ref10.item;
  return (0, _toConsumableArray2["default"])((0, _utils.findAll)('EventDefinition', item));
}
function modifiers(_ref11) {
  var item = _ref11.item;
  return (0, _toConsumableArray2["default"])((0, _utils.findAll)('ModifierDefinition', item));
}
function errors(_ref12) {
  var item = _ref12.item;
  return (0, _toConsumableArray2["default"])((0, _utils.findAll)('ErrorDefinition', item));
}
function variables(_ref13) {
  var item = _ref13.item;
  return item.nodeType === 'ContractDefinition' ? item.nodes.filter((0, _utils.isNodeType)('VariableDeclaration')).filter(function (v) {
    return v.stateVariable && v.visibility !== 'private';
  }) : undefined;
}
function types(_ref14) {
  var item = _ref14.item;
  return (0, _toConsumableArray2["default"])((0, _utils.findAll)(['StructDefinition', 'EnumDefinition', 'UserDefinedValueTypeDefinition'], item));
}
function anchor(_ref15) {
  var item = _ref15.item,
    contract = _ref15.contract;
  var res = '';
  if (contract) {
    res += contract.name + '-';
  }
  res += item.name;
  if ('parameters' in item) {
    var _signature = item.parameters.parameters.map(function (v) {
      return v.typeName.typeDescriptions.typeString;
    }).join(',');
    res += (0, _helpers.slug)('(' + _signature + ')');
  }
  if ((0, _utils.isNodeType)('VariableDeclaration', item)) {
    res += '-' + (0, _helpers.slug)(item.typeName.typeDescriptions.typeString);
  }
  return res;
}
function inheritance(_ref16) {
  var item = _ref16.item,
    build = _ref16.build;
  if (!(0, _utils.isNodeType)('ContractDefinition', item)) {
    throw new Error('used inherited-items on non-contract');
  }
  return item.linearizedBaseContracts.map(function (id) {
    return build.deref('ContractDefinition', id);
  }).filter(function (c, i) {
    return c.name !== 'Context' || i === 0;
  });
}
function hasfunctions(_ref17) {
  var item = _ref17.item;
  return item.inheritance.some(function (c) {
    return c.functions.length > 0;
  });
}
function hasevents(_ref18) {
  var item = _ref18.item;
  return item.inheritance.some(function (c) {
    return c.events.length > 0;
  });
}
function inheritedfunctions(_ref19) {
  var item = _ref19.item;
  var _ref20 = item,
    inheritance = _ref20.inheritance;
  var baseFunctions = new Set(inheritance.flatMap(function (c) {
    return c.functions.flatMap(function (f) {
      var _f$baseFunctions;
      return (_f$baseFunctions = f.baseFunctions) !== null && _f$baseFunctions !== void 0 ? _f$baseFunctions : [];
    });
  }));
  return inheritance.map(function (contract, i) {
    return {
      contract: contract,
      functions: contract.functions.filter(function (f) {
        return !baseFunctions.has(f.id) && (f.name !== 'constructor' || i === 0);
      })
    };
  });
}

/***/ }),

/***/ 9786:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(9021);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaults = void 0;
////////////////////////////////////////////////////////////////////////////////////////////////////

// Other config parameters that will be provided by the environment (e.g. Hardhat)
// rather than by the user manually, unless using the library directly.

var defaults = {
  root: process.cwd(),
  sourcesDir: 'contracts',
  outputDir: 'docs',
  pages: 'single',
  exclude: [],
  theme: 'markdown',
  collapseNewlines: true,
  pageExtension: '.md'
};
exports.defaults = defaults;

/***/ }),

/***/ 2040:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.docItemTypes = void 0;
exports.isDocItem = isDocItem;
var docItemTypes = ['ContractDefinition', 'EnumDefinition', 'ErrorDefinition', 'EventDefinition', 'FunctionDefinition', 'ModifierDefinition', 'StructDefinition', 'UserDefinedValueTypeDefinition', 'VariableDeclaration'];

// Make sure at compile time that docItemTypes contains exactly the node types of DocItem.
exports.docItemTypes = docItemTypes;
var _ = true;
function isDocItem(node) {
  return docItemTypes.includes(node.nodeType);
}

/***/ }),

/***/ 8931:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.itemPartialName = void 0;
exports.render = render;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7794));
var _handlebars = _interopRequireDefault(__webpack_require__(4197));
var _itemType = __webpack_require__(6368);
var _fs = _interopRequireDefault(__webpack_require__(780));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function render(site, templates, collapseNewlines) {
  var renderPage = buildRenderer(templates);
  var renderedPages = [];
  var _iterator = _createForOfIteratorHelper(site.pages),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _page = _step.value;
      var contents = renderPage(_page, {
        data: {
          site: site
        }
      });
      if (collapseNewlines) {
        contents = contents.replace(/\n{3,}/g, '\n\n');
      }
      renderedPages.push({
        id: _page.id,
        contents: contents
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return renderedPages;
}
var itemPartialName = function itemPartialName(item) {
  return (0, _itemType.itemType)(item).replace(/ /g, '-').toLowerCase();
};
exports.itemPartialName = itemPartialName;
function itemPartial(item, options) {
  var _options$partials;
  if (!item.__item_context) {
    throw new Error("Partial 'item' used in unsupported context (not a doc item)");
  }
  var partial = options == null ? void 0 : (_options$partials = options.partials) == null ? void 0 : _options$partials[itemPartialName(item)];
  if (!partial) {
    throw new Error("Missing partial '".concat(itemPartialName(item), "'"));
  }
  return partial(item, options);
}
function readmeHelper(H, path, opts) {
  var items = opts.data.root.items;
  var renderedItems = Object.fromEntries(items.map(function (item) {
    return [item.name, new H.SafeString(H.compile('{{>item}}')(item, opts))];
  }));
  return new H.SafeString(H.compile(_fs["default"].readFileSync(path, 'utf8'))(renderedItems, opts));
}
function buildRenderer(templates) {
  var _templates$partials;
  var pageTemplate = (_templates$partials = templates.partials) == null ? void 0 : _templates$partials.page;
  if (pageTemplate === undefined) {
    throw new Error("Missing 'page' template");
  }
  var H = _handlebars["default"].create();
  var _loop = function _loop() {
    var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
      name = _Object$entries$_i[0],
      getBody = _Object$entries$_i[1];
    var partial = void 0;
    H.registerPartial(name, function () {
      var _partial;
      (_partial = partial) !== null && _partial !== void 0 ? _partial : partial = H.compile(getBody());
      return partial.apply(void 0, arguments);
    });
  };
  for (var _i = 0, _Object$entries = Object.entries((_templates$partials2 = templates.partials) !== null && _templates$partials2 !== void 0 ? _templates$partials2 : {}); _i < _Object$entries.length; _i++) {
    var _templates$partials2;
    _loop();
  }
  H.registerHelper('readme', function (path, opts) {
    return readmeHelper(H, path, opts);
  });
  for (var _i2 = 0, _Object$entries2 = Object.entries((_templates$helpers = templates.helpers) !== null && _templates$helpers !== void 0 ? _templates$helpers : {}); _i2 < _Object$entries2.length; _i2++) {
    var _templates$helpers;
    var _Object$entries2$_i = (0, _slicedToArray2["default"])(_Object$entries2[_i2], 2),
      name = _Object$entries2$_i[0],
      fn = _Object$entries2$_i[1];
    H.registerHelper(name, fn);
  }
  H.registerPartial('item', itemPartial);
  return H.compile('{{>page}}');
}

/***/ }),

/***/ 8326:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DOC_ITEM_CONTEXT = void 0;
exports.buildSite = buildSite;
exports.pageAssigner = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(6604));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7794));
var _path = _interopRequireDefault(__webpack_require__(6442));
var _utils = __webpack_require__(7759);
var _docItem = __webpack_require__(2040);
var _clone = __webpack_require__(9651);
var _isChild = __webpack_require__(3271);
var _memoizedGetter = __webpack_require__(7562);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var pageAssigner = {
  single: function single(_1, _2, _ref) {
    var ext = _ref.pageExtension;
    return 'index' + ext;
  },
  items: function items(item, _, _ref2) {
    var ext = _ref2.pageExtension;
    return item.name + ext;
  },
  files: function files(_, file, _ref3) {
    var ext = _ref3.pageExtension,
      sourcesDir = _ref3.sourcesDir;
    return _path["default"].relative(sourcesDir, file.absolutePath).replace('.sol', ext);
  }
};
exports.pageAssigner = pageAssigner;
var DOC_ITEM_CONTEXT = '__item_context';
exports.DOC_ITEM_CONTEXT = DOC_ITEM_CONTEXT;
function buildSite(builds, siteConfig) {
  var properties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var assign = typeof siteConfig.pages === 'string' ? pageAssigner[siteConfig.pages] : siteConfig.pages;
  var seen = new Set();
  var items = [];
  var pages = {};

  // eslint-disable-next-line prefer-const
  var _iterator = _createForOfIteratorHelper(builds),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
        input = _step$value.input,
        output = _step$value.output;
      // Clone because we will mutate in order to add item context.
      output = Object.assign({}, output, {
        sources: (0, _clone.clone)(output.sources)
      });
      var deref = (0, _utils.astDereferencer)(output);
      var decodeSrc = (0, _utils.srcDecoder)(input, output);
      var build = {
        input: input,
        output: output,
        deref: deref,
        decodeSrc: decodeSrc
      };
      for (var _i = 0, _Object$values = Object.values(output.sources); _i < _Object$values.length; _i++) {
        var _file = _Object$values[_i].ast;
        var isNewFile = !seen.has(_file.absolutePath);
        seen.add(_file.absolutePath);
        var _iterator2 = _createForOfIteratorHelper(_file.nodes),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var topLevelItem = _step2.value;
            if (!(0, _docItem.isDocItem)(topLevelItem)) continue;
            var page = assignIfIncludedSource(assign, topLevelItem, _file, siteConfig);
            var withContext = defineContext(topLevelItem, build, _file, page);
            defineProperties(withContext, properties);
            if (isNewFile && page !== undefined) {
              var _pages$page;
              ((_pages$page = pages[page]) !== null && _pages$page !== void 0 ? _pages$page : pages[page] = []).push(withContext);
              items.push(withContext);
            }
            if (!(0, _utils.isNodeType)('ContractDefinition', topLevelItem)) {
              continue;
            }
            var _iterator3 = _createForOfIteratorHelper(topLevelItem.nodes),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _item = _step3.value;
                if (!(0, _docItem.isDocItem)(_item)) continue;
                if (isNewFile && page !== undefined) items.push(_item);
                var contract = topLevelItem.nodeType === 'ContractDefinition' ? topLevelItem : undefined;
                var _withContext = defineContext(_item, build, _file, page, contract);
                defineProperties(_withContext, properties);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return {
    items: items,
    pages: Object.entries(pages).map(function (_ref4) {
      var _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
        id = _ref5[0],
        pageItems = _ref5[1];
      return {
        id: id,
        items: pageItems
      };
    })
  };
}
function defineContext(item, build, file, page, contract) {
  return Object.assign(item, (0, _defineProperty2["default"])({}, DOC_ITEM_CONTEXT, {
    build: build,
    file: file,
    contract: contract,
    page: page,
    item: item
  }));
}
function defineProperties(item, properties) {
  var _loop = function _loop() {
    var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i2], 2),
      prop = _Object$entries$_i[0],
      fn = _Object$entries$_i[1];
    var original = item[prop];
    (0, _memoizedGetter.defineGetterMemoized)(item, prop, function () {
      return fn(item.__item_context, original);
    });
  };
  for (var _i2 = 0, _Object$entries = Object.entries(properties); _i2 < _Object$entries.length; _i2++) {
    _loop();
  }
}
function assignIfIncludedSource(assign, item, file, config) {
  return isFileIncluded(file.absolutePath, config) ? assign(item, file, config) : undefined;
}
function isFileIncluded(file, config) {
  return (0, _isChild.isChild)(file, config.sourcesDir) && config.exclude.every(function (e) {
    return !(0, _isChild.isChild)(file, _path["default"].join(config.sourcesDir, e));
  });
}

/***/ }),

/***/ 3337:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7085);
var _typeof = __webpack_require__(2886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.loadTemplates = loadTemplates;
exports.readTemplates = readTemplates;
var _regenerator = _interopRequireDefault(__webpack_require__(9454));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7794));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(1544));
var _mapKeys = __webpack_require__(4389);
var defaultProperties = _interopRequireWildcard(__webpack_require__(1294));
var themeHelpers = _interopRequireWildcard(__webpack_require__(7713));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable @typescript-eslint/no-var-requires */

var common = __webpack_require__(5551);
var contract = __webpack_require__(999);
var enum_ = __webpack_require__(1096);
var error = __webpack_require__(4590);
var event = __webpack_require__(4983);
var function_ = __webpack_require__(4731);
var modifier = __webpack_require__(531);
var page = __webpack_require__(2718);
var struct = __webpack_require__(4450);
var variable = __webpack_require__(5449);
var userDefinedValueType = __webpack_require__(1319);
/**
 * Loads the templates that will be used for rendering a site based on a
 * default theme and user templates.
 *
 * The result contains all partials, helpers, and property getters defined in
 * the user templates and the default theme, where the user's take precedence
 * if there is a clash. Additionally, all theme partials and helpers are
 * included with the theme prefix, e.g. `markdown/contract` will be a partial.
 */
function loadTemplates(_x, _x2, _x3) {
  return _loadTemplates.apply(this, arguments);
}
/**
 * Read templates and helpers from a directory.
 */
function _loadTemplates() {
  _loadTemplates = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(defaultTheme, root, userTemplatesPath) {
    var _themes$defaultTheme, _themes$defaultTheme2;
    var themes, templates, _loop, _i, _Object$entries;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return readThemes();
          case 2:
            themes = _context.sent;
            // Initialize templates with the default theme.
            templates = {
              partials: Object.assign({}, (_themes$defaultTheme = themes[defaultTheme]) == null ? void 0 : _themes$defaultTheme.partials),
              helpers: Object.assign({}, (_themes$defaultTheme2 = themes[defaultTheme]) == null ? void 0 : _themes$defaultTheme2.helpers),
              properties: Object.assign({}, defaultProperties)
            }; // Add partials and helpers from all themes, prefixed with the theme name.
            _loop = function _loop() {
              var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
                themeName = _Object$entries$_i[0],
                theme = _Object$entries$_i[1];
              var addPrefix = function addPrefix(k) {
                return "".concat(themeName, "/").concat(k);
              };
              Object.assign(templates.partials, (0, _mapKeys.mapKeys)(theme.partials, addPrefix));
              Object.assign(templates.helpers, (0, _mapKeys.mapKeys)(theme.helpers, addPrefix));
            };
            for (_i = 0, _Object$entries = Object.entries(themes); _i < _Object$entries.length; _i++) {
              _loop();
            }
            return _context.abrupt("return", templates);
          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadTemplates.apply(this, arguments);
}
function readTemplates() {
  return _readTemplates.apply(this, arguments);
}
function _readTemplates() {
  _readTemplates = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return readPartials();
          case 2:
            _context2.t0 = _context2.sent;
            _context2.next = 5;
            return readHelpers('helpers');
          case 5:
            _context2.t1 = _context2.sent;
            _context2.next = 8;
            return readHelpers('properties');
          case 8:
            _context2.t2 = _context2.sent;
            return _context2.abrupt("return", {
              partials: _context2.t0,
              helpers: _context2.t1,
              properties: _context2.t2
            });
          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _readTemplates.apply(this, arguments);
}
function readPartials() {
  return _readPartials.apply(this, arguments);
}
function _readPartials() {
  _readPartials = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var partials;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            partials = {};
            partials["common"] = function () {
              return common;
            };
            partials["contract"] = function () {
              return contract;
            };
            partials["enum"] = function () {
              return enum_;
            };
            partials["error"] = function () {
              return error;
            };
            partials["event"] = function () {
              return event;
            };
            partials["function"] = function () {
              return function_;
            };
            partials["modifier"] = function () {
              return modifier;
            };
            partials["page"] = function () {
              return page;
            };
            partials["struct"] = function () {
              return struct;
            };
            partials["variable"] = function () {
              return variable;
            };
            partials["user-defined-value-type"] = function () {
              return userDefinedValueType;
            };
            return _context3.abrupt("return", partials);
          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _readPartials.apply(this, arguments);
}
function readHelpers(_x4) {
  return _readHelpers.apply(this, arguments);
}
/**
 * Reads all built-in themes into an object. Partials will always be found in
 * src/themes, whereas helpers may instead be found in dist/themes if TypeScript
 * can't be imported directly.
 */
function _readHelpers() {
  _readHelpers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(name) {
    var helpers, _name2;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            helpers = {};
            for (_name2 in themeHelpers) {
              if (typeof themeHelpers[_name2] === 'function') {
                helpers[_name2] = themeHelpers[_name2];
              }
            }
            return _context4.abrupt("return", helpers);
          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _readHelpers.apply(this, arguments);
}
function readThemes() {
  return _readThemes.apply(this, arguments);
}
function _readThemes() {
  _readThemes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
    var themes;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            themes = {};
            _context5.next = 3;
            return readTemplates();
          case 3:
            themes['markdown'] = _context5.sent;
            return _context5.abrupt("return", themes);
          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _readThemes.apply(this, arguments);
}

/***/ }),

/***/ 7713:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  h: true,
  hsection: true,
  s: true
};
exports.h = h;
exports.hsection = hsection;
exports.s = s;
var _handlebars = __webpack_require__(4197);
var _helpers = __webpack_require__(9437);
Object.keys(_helpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _helpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _helpers[key];
    }
  });
});
/**
 * Returns a Markdown heading marker. An optional number increases the heading level.
 *
 *    Input                  Output
 *    {{h}} {{name}}         # Name
 *    {{h 2}} {{name}}       ## Name
 */

function h(hsublevel, opts) {
  var _getHLevel = getHLevel(hsublevel, opts),
    hlevel = _getHLevel.hlevel;
  return new Array(hlevel).fill('#').join('');
}
;

/**
 * Delineates a section where headings should be increased by 1 or a custom number.
 *
 *    {{#hsection}}
 *    {{>partial-with-headings}}
 *    {{/hsection}}
 */

function hsection(hsublevel, opts) {
  var hlevel;
  var _getHLevel2 = getHLevel(hsublevel, opts);
  hlevel = _getHLevel2.hlevel;
  opts = _getHLevel2.opts;
  opts.data = _handlebars.Utils.createFrame(opts.data);
  opts.data.hlevel = hlevel;
  return opts.fn(this, opts);
}

/**
 * Returns a Markdown heading marker. An optional number increases the heading level.
 *
 *    Input                  Output
 *    {{h}} {{name}}         # Name
 *    {{h 2}} {{name}}       ## Name
 */

function s(hsublevel, opts) {
  return ' --- ';
}
;

/**
 * Helper for dealing with the optional hsublevel argument.
 */
function getHLevel(hsublevel, opts) {
  var _opts$data$hlevel, _opts$data;
  if (typeof hsublevel === 'number') {
    opts = opts;
    hsublevel = Math.max(1, hsublevel);
  } else {
    opts = hsublevel;
    hsublevel = 1;
  }
  var contextHLevel = (_opts$data$hlevel = (_opts$data = opts.data) == null ? void 0 : _opts$data.hlevel) !== null && _opts$data$hlevel !== void 0 ? _opts$data$hlevel : 0;
  return {
    opts: opts,
    hlevel: contextHLevel + hsublevel
  };
}

/***/ }),

/***/ 7501:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ItemError = void 0;
var _createClass2 = _interopRequireDefault(__webpack_require__(9152));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2830));
var _inherits2 = _interopRequireDefault(__webpack_require__(9601));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(7933));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3910));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(37));
var _site = __webpack_require__(8326);
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ItemError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(ItemError, _Error);
  var _super = _createSuper(ItemError);
  function ItemError(msg, item) {
    var _this;
    (0, _classCallCheck2["default"])(this, ItemError);
    var ctx = item[_site.DOC_ITEM_CONTEXT];
    var src = ctx && ctx.build.decodeSrc(item);
    if (src) {
      _this = _super.call(this, msg + " (".concat(src, ")"));
    } else {
      _this = _super.call(this, msg);
    }
    return (0, _possibleConstructorReturn2["default"])(_this);
  }
  return (0, _createClass2["default"])(ItemError);
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));
exports.ItemError = ItemError;

/***/ }),

/***/ 8442:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.arraysEqual = arraysEqual;
function arraysEqual(a, b) {
  var mapFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (x) {
    return x;
  };
  return a.length === b.length && a.every(function (x, i) {
    return mapFn(x) === mapFn(b[i]);
  });
}

/***/ }),

/***/ 9651:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.clone = void 0;
/**
 * Deep cloning good enough for simple objects like solc output. Types are not
 * sound because the function may lose information: non-enumerable properties,
 * symbols, undefined values, prototypes, etc.
 */
var clone = function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
};
exports.clone = clone;

/***/ }),

/***/ 6818:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.execAll = execAll;
var _regenerator = _interopRequireDefault(__webpack_require__(9454));
var _marked = /*#__PURE__*/_regenerator["default"].mark(execAll);
/**
 * Iterates over all contiguous matches of the regular expression over the
 * text. Stops as soon as the regular expression no longer matches at the
 * current position.
 */
function execAll(re, text) {
  var match;
  return _regenerator["default"].wrap(function execAll$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          re = new RegExp(re, re.flags + (re.sticky ? '' : 'y'));
        case 1:
          if (false) {}
          match = re.exec(text); // We break out of the loop if there is no match or if the empty string is
          // matched because no progress will be made and it will loop indefinitely.
          if (match != null && match[0]) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("break", 9);
        case 5:
          _context.next = 7;
          return match;
        case 7:
          _context.next = 1;
          break;
        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

/***/ }),

/***/ 3271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isChild = isChild;
var _path = _interopRequireDefault(__webpack_require__(6442));
function isChild(file, parent) {
  return _path["default"].normalize(file + _path["default"].sep).startsWith(_path["default"].normalize(parent + _path["default"].sep));
}

/***/ }),

/***/ 6368:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.itemType = itemType;
function itemType(item) {
  return item.nodeType.replace(/(Definition|Declaration)$/, '').replace(/(\w)([A-Z])/g, '$1 $2');
}

/***/ }),

/***/ 4389:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.mapKeys = mapKeys;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7794));
function mapKeys(obj, fn) {
  return Object.fromEntries(Object.entries(obj).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      k = _ref2[0],
      v = _ref2[1];
    return [fn(k), v];
  }));
}

/***/ }),

/***/ 893:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.filterValues = filterValues;
exports.mapValues = mapValues;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7794));
function mapValues(obj, fn) {
  var res = {};
  for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
      k = _Object$entries$_i[0],
      v = _Object$entries$_i[1];
    res[k] = fn(v);
  }
  return res;
}
function filterValues(obj, fn) {
  var res = {};
  for (var _i2 = 0, _Object$entries2 = Object.entries(obj); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = (0, _slicedToArray2["default"])(_Object$entries2[_i2], 2),
      k = _Object$entries2$_i[0],
      v = _Object$entries2$_i[1];
    if (fn(v)) {
      res[k] = v;
    }
  }
  return res;
}

/***/ }),

/***/ 7562:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defineGetterMemoized = defineGetterMemoized;
function defineGetterMemoized(obj, key, getter) {
  var state = 'todo';
  var value;
  Object.defineProperty(obj, key, {
    enumerable: true,
    get: function get() {
      switch (state) {
        case 'done':
          return value;
        case 'doing':
          throw new Error("Detected recursion");
        case 'todo':
          state = 'doing';
          value = getter();
          state = 'done';
          return value;
      }
    }
  });
}

/***/ }),

/***/ 722:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseNatspec = parseNatspec;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(5627));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7794));
var _utils = __webpack_require__(7759);
var _site = __webpack_require__(8326);
var _arraysEqual = __webpack_require__(8442);
var _execall = __webpack_require__(6818);
var _itemType = __webpack_require__(6368);
var _ItemError = __webpack_require__(7501);
var _readItemDocs = __webpack_require__(376);
var _scope = __webpack_require__(6429);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function parseNatspec(item) {
  if (!item[_site.DOC_ITEM_CONTEXT]) throw new Error("Not an item or item is missing context");
  var res = {};
  var docSource = (0, _readItemDocs.readItemDocs)(item);
  var docString = docSource !== undefined ? cleanUpDocstringFromSource(docSource) : 'documentation' in item && item.documentation ? typeof item.documentation === 'string' ? item.documentation : cleanUpDocstringFromSolc(item.documentation.text) : '';
  var tagMatches = (0, _execall.execAll)(/^(?:@(\w+|custom:[a-z][a-z-]*) )?((?:(?!^@(?:\w+|custom:[a-z][a-z-]*) )[^])*)/m, docString);
  var inheritFrom;
  var _iterator = _createForOfIteratorHelper(tagMatches),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = (0, _slicedToArray2["default"])(_step.value, 3),
        _step$value$ = _step$value[1],
        _tag = _step$value$ === void 0 ? 'notice' : _step$value$,
        content = _step$value[2];
      if (content === undefined) throw new _ItemError.ItemError('Unexpected error', item);
      if (_tag === 'dev' || _tag === 'notice') {
        var _res, _res$_tag;
        (_res$_tag = (_res = res)[_tag]) !== null && _res$_tag !== void 0 ? _res$_tag : _res[_tag] = '';
        res[_tag] += content;
      }
      if (_tag === 'title') {
        res.title = content.trim();
      }
      if (_tag === 'param') {
        var paramMatches = content.match(/(\w+) ([^]*)/);
        if (paramMatches) {
          var _res2, _res2$params;
          var _ref = paramMatches,
            _ref2 = (0, _slicedToArray2["default"])(_ref, 3),
            name = _ref2[1],
            description = _ref2[2];
          (_res2$params = (_res2 = res).params) !== null && _res2$params !== void 0 ? _res2$params : _res2.params = [];
          res.params.push({
            name: name,
            description: description.trim()
          });
        }
      }
      if (_tag === 'return') {
        var _res3, _res3$returns;
        if (!('returnParameters' in item)) {
          throw new _ItemError.ItemError("Item does not contain return parameters", item);
        }
        (_res3$returns = (_res3 = res).returns) !== null && _res3$returns !== void 0 ? _res3$returns : _res3.returns = [];
        var i = res.returns.length;
        var p = item.returnParameters.parameters[i];
        if (p === undefined) {
          throw new _ItemError.ItemError('Got more @return tags than expected', item);
        }
        if (!p.name) {
          res.returns.push({
            description: content.trim()
          });
        } else {
          var _description$trim;
          var _paramMatches = content.match(/(\w+)( ([^]*))?/);
          if (!_paramMatches || _paramMatches[1] !== p.name) {
            throw new _ItemError.ItemError("Expected @return tag to start with name '".concat(p.name, "'"), item);
          }
          var _ref3 = _paramMatches,
            _ref4 = (0, _slicedToArray2["default"])(_ref3, 3),
            _name = _ref4[1],
            _description = _ref4[2];
          res.returns.push({
            name: _name,
            description: (_description$trim = _description == null ? void 0 : _description.trim()) !== null && _description$trim !== void 0 ? _description$trim : ''
          });
        }
      }
      if (_tag != null && _tag.startsWith('custom:')) {
        var _res4, _res4$custom, _res$custom, _res$custom$key;
        var key = _tag.replace(/^custom:/, '');
        (_res4$custom = (_res4 = res).custom) !== null && _res4$custom !== void 0 ? _res4$custom : _res4.custom = {};
        (_res$custom$key = (_res$custom = res.custom)[key]) !== null && _res$custom$key !== void 0 ? _res$custom$key : _res$custom[key] = '';
        res.custom[key] += content;
      }
      if (_tag === 'inheritdoc') {
        if (!(item.nodeType === 'FunctionDefinition' || item.nodeType === 'VariableDeclaration')) {
          throw new _ItemError.ItemError("Expected function or variable but saw ".concat((0, _itemType.itemType)(item)), item);
        }
        var parentContractName = content.trim();
        var parentContract = (0, _scope.getContractsInScope)(item)[parentContractName];
        if (!parentContract) {
          throw new _ItemError.ItemError("Parent contract '".concat(parentContractName, "' not found"), item);
        }
        inheritFrom = (0, _toConsumableArray2["default"])((0, _utils.findAll)('FunctionDefinition', parentContract)).find(function (f) {
          var _item$baseFunctions2;
          return (_item$baseFunctions2 = item.baseFunctions) == null ? void 0 : _item$baseFunctions2.includes(f.id);
        });
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (docString.length === 0) {
    var _item$baseFunctions;
    if ('baseFunctions' in item && ((_item$baseFunctions = item.baseFunctions) == null ? void 0 : _item$baseFunctions.length) === 1) {
      var baseFn = item[_site.DOC_ITEM_CONTEXT].build.deref('FunctionDefinition', item.baseFunctions[0]);
      var shouldInherit = item.nodeType === 'VariableDeclaration' || (0, _arraysEqual.arraysEqual)(item.parameters.parameters, baseFn.parameters.parameters, function (p) {
        return p.name;
      });
      if (shouldInherit) {
        inheritFrom = baseFn;
      }
    }
  }
  if (res.dev) res.dev = res.dev.trim();
  if (res.notice) res.notice = res.notice.trim();
  if (inheritFrom) {
    res = Object.assign({}, parseNatspec(inheritFrom), res);
  }
  return res;
}

// Fix solc buggy parsing of doc comments.
// Reverse engineered from solc behavior.
function cleanUpDocstringFromSolc(text) {
  return text.replace(/\n\n?^[ \t]*(?:\*|\/\/\/)/mg, '\n\n').replace(/^[ \t]?/mg, '');
}
function cleanUpDocstringFromSource(text) {
  return text.replace(/^\/\*\*([\s\S]*)\*\/$/, '$1').trim().replace(/^[ \t]*(\*|\/\/\/)[ \t]?/mg, '');
}

/***/ }),

/***/ 1397:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.normalizeContractPath = normalizeContractPath;
function normalizeContractPath(contractPath) {
  var paths = contractPath.split('/');
  var filename = paths[paths.length - 1];
  var folders = '';
  for (var i = 0; i < paths.length - 1; i++) {
    if (i !== paths.length - 1) {
      folders += "".concat(paths[i], "/");
    }
  }
  var resultingPath = "".concat(folders).concat(filename);
  return [folders, resultingPath, filename];
}

/***/ }),

/***/ 376:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(144)["Buffer"];


var _interopRequireDefault = __webpack_require__(7085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.readItemDocs = readItemDocs;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7794));
var _typeof2 = _interopRequireDefault(__webpack_require__(2840));
var _site = __webpack_require__(8326);
function readItemDocs(item) {
  var build = item[_site.DOC_ITEM_CONTEXT].build;
  // Note that Solidity 0.5 has item.documentation: string even though the
  // types do not reflect that. This is why we check typeof === object.
  if ('documentation' in item && item.documentation && (0, _typeof2["default"])(item.documentation) === 'object') {
    var _build$input$sources$;
    var _decodeSrc = decodeSrc(item.documentation.src, build),
      source = _decodeSrc.source,
      start = _decodeSrc.start,
      length = _decodeSrc.length;
    var content = (_build$input$sources$ = build.input.sources[source]) == null ? void 0 : _build$input$sources$.content;
    if (content !== undefined) {
      return Buffer.from(content, 'utf8').slice(start, start + length).toString('utf8');
    }
  }
}
function decodeSrc(src, build) {
  var _src$split$map = src.split(':').map(function (s) {
      return parseInt(s);
    }),
    _src$split$map2 = (0, _slicedToArray2["default"])(_src$split$map, 3),
    start = _src$split$map2[0],
    length = _src$split$map2[1],
    sourceId = _src$split$map2[2];
  if (start === undefined || length === undefined || sourceId === undefined) {
    throw new Error("Bad source string ".concat(src));
  }
  var source = Object.keys(build.output.sources).find(function (s) {
    var _build$output$sources;
    return ((_build$output$sources = build.output.sources[s]) == null ? void 0 : _build$output$sources.id) === sourceId;
  });
  if (source === undefined) {
    throw new Error("No source with id ".concat(sourceId));
  }
  return {
    source: source,
    start: start,
    length: length
  };
}

/***/ }),

/***/ 6429:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getContractsInScope = getContractsInScope;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7794));
var _utils = __webpack_require__(7759);
var _mapValues = __webpack_require__(893);
var _mapKeys = __webpack_require__(4389);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function getContractsInScope(item) {
  var cache = new WeakMap();
  return (0, _mapValues.filterValues)(flattenScope(run(item.__item_context.file)), (0, _utils.isNodeType)('ContractDefinition'));
  function run(file) {
    if (cache.has(file)) {
      return cache.get(file);
    }
    var scope = {};
    cache.set(file, scope);
    var _iterator = _createForOfIteratorHelper(file.nodes),
      _step;
    try {
      var _loop = function _loop() {
        var c = _step.value;
        if ('name' in c) {
          scope[c.name] = function () {
            return {
              definition: c
            };
          };
        }
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper((0, _utils.findAll)('ImportDirective', file)),
      _step2;
    try {
      var _loop2 = function _loop2() {
        var i = _step2.value;
        var importedFile = item.__item_context.build.deref('SourceUnit', i.sourceUnit);
        var importedScope = run(importedFile);
        if (i.unitAlias) {
          scope[i.unitAlias] = function () {
            return {
              namespace: importedScope
            };
          };
        } else if (i.symbolAliases.length === 0) {
          Object.assign(scope, importedScope);
        } else {
          var _iterator3 = _createForOfIteratorHelper(i.symbolAliases),
            _step3;
          try {
            var _loop3 = function _loop3() {
              var _a$local, _importedScope$a$fore;
              var a = _step3.value;
              // Delayed function call supports circular dependencies
              scope[(_a$local = a.local) !== null && _a$local !== void 0 ? _a$local : a.foreign.name] = (_importedScope$a$fore = importedScope[a.foreign.name]) !== null && _importedScope$a$fore !== void 0 ? _importedScope$a$fore : function () {
                return importedScope[a.foreign.name]();
              };
            };
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              _loop3();
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      };
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    ;
    return scope;
  }
}
function flattenScope(scope) {
  return Object.fromEntries(Object.entries(scope).flatMap(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      k = _ref2[0],
      fn = _ref2[1];
    var v = fn();
    if ('definition' in v) {
      return [[k, v.definition]];
    } else {
      return Object.entries((0, _mapKeys.mapKeys)(flattenScope(v.namespace), function (k2) {
        return k + '.' + k2;
      }));
    }
  }));
}

/***/ }),

/***/ 2002:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(7085);
var _react = _interopRequireDefault(__webpack_require__(7182));
var _client = __webpack_require__(8244);
var _App = _interopRequireDefault(__webpack_require__(1753));
var _jsxDevRuntime = __webpack_require__(6872);
var _jsxFileName = "/workspaces/remix-project/apps/doc-gen/src/main.tsx";
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

/***/ 661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5551:
/***/ ((module) => {

"use strict";
module.exports = "{{h}} {{name}}\n\n{{#if signature}}\n```solidity\n{{{signature}}}\n```\n{{/if}}\n\n{{{natspec.notice}}}\n\n{{#if natspec.dev}}\n_{{{natspec.dev}}}_\n{{/if}}\n\n{{#if natspec.params}}\n{{h 2}} Parameters\n\n| Name | Type | Description |\n| ---- | ---- | ----------- |\n{{#each params}}\n| {{name}} | {{type}} | {{{joinLines natspec}}} |\n{{/each}}\n{{/if}}\n\n{{#if natspec.returns}}\n{{h 2}} Return Values\n\n| Name | Type | Description |\n| ---- | ---- | ----------- |\n{{#each returns}}\n| {{#if name}}{{name}}{{else}}[{{@index}}]{{/if}} | {{type}} | {{{joinLines natspec}}} |\n{{/each}}\n{{/if}}\n\n";

/***/ }),

/***/ 999:
/***/ ((module) => {

"use strict";
module.exports = "{{>common}}\n\n{{h 2}} Contract\n{{name}} : {{__item_context.file.absolutePath}}\n\n{{{natspec.dev}}}\n\n{{#if modifiers}}\n{{s}}\n{{h 2}} Modifiers:\n{{#each modifiers}}\n{{#hsection}}\n{{>item}}\n{{/hsection}}\n{{/each}}\n{{/if}}\n\n{{#if hasfunctions}}\n{{s}}\n{{h 2}} Functions:\n{{#each inheritedfunctions}}\n{{#unless @first}}\ninherits {{contract.name}}:\n{{/unless}}\n{{#each functions}}\n{{#hsection}}\n{{>item}}\n{{/hsection}}\n{{/each}}\n{{/each}}\n{{/if}}\n\n{{#if hasevents}}\n{{s}}\n{{h 2}} Events:\n{{#each inheritance}}\n{{#unless @first}}\ninherits {{name}}:\n{{/unless}}\n{{#each events}}\n{{#hsection}}\n{{>item}}\n{{/hsection}}\n{{/each}}\n{{/each}}\n{{/if}}\n";

/***/ }),

/***/ 1096:
/***/ ((module) => {

"use strict";
module.exports = "{{>common}}\n\n```solidity\nenum {{name}} {\n{{#each members}}\n  {{name}}{{#unless @last}},{{/unless}}\n{{/each}}\n}\n```\n";

/***/ }),

/***/ 4590:
/***/ ((module) => {

"use strict";
module.exports = "{{>common}}\n";

/***/ }),

/***/ 4983:
/***/ ((module) => {

"use strict";
module.exports = "{{>common}}\n";

/***/ }),

/***/ 4731:
/***/ ((module) => {

"use strict";
module.exports = "{{>common}}\n";

/***/ }),

/***/ 531:
/***/ ((module) => {

"use strict";
module.exports = "{{>common}}\n";

/***/ }),

/***/ 2718:
/***/ ((module) => {

"use strict";
module.exports = "# Solidity API\n\n{{#each items}}\n{{#hsection}}\n{{>item}}\n{{/hsection}}\n\n{{/each}}\n";

/***/ }),

/***/ 4450:
/***/ ((module) => {

"use strict";
module.exports = "{{>common}}\n\n```solidity\nstruct {{name}} {\n{{#each members}}\n  {{{typeName.typeDescriptions.typeString}}} {{name}};\n{{/each}}\n}\n```\n";

/***/ }),

/***/ 1319:
/***/ ((module) => {

"use strict";
module.exports = "{{>common}}\n";

/***/ }),

/***/ 5449:
/***/ ((module) => {

"use strict";
module.exports = "{{>common}}\n";

/***/ }),

/***/ 780:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 7538:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3260:
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