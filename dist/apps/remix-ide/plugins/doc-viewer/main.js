"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ 1753:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(7085);
var _typeof = __webpack_require__(2886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = App;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(5159));
var _react = _interopRequireWildcard(__webpack_require__(7182));
var _docviewer = __webpack_require__(5313);
var _reactMarkdown = _interopRequireDefault(__webpack_require__(8928));
var _remarkGfm = _interopRequireDefault(__webpack_require__(4081));
var _jsxDevRuntime = __webpack_require__(6872);
var _jsxFileName = "/workspaces/remix-project/apps/doc-viewer/src/app/App.tsx";
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var client = new _docviewer.DocViewer();
function App() {
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    contents = _useState2[0],
    setContents = _useState2[1];
  (0, _react.useEffect)(function () {
    client.eventEmitter.on('contentsReady', function (fileContents) {
      setContents(fileContents);
    });
  }, []);
  var edit = function edit() {
    if (!client.mdFile) return;
    client.call('fileManager', 'open', client.mdFile);
  };
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "m-5 p-2",
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
        className: "btn btn-secondary mb-2",
        onClick: edit,
        children: "EDIT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactMarkdown["default"], {
        children: contents,
        remarkPlugins: [_remarkGfm["default"]]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ 5313:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(7085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DocViewer = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(9454));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(1544));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2830));
var _createClass2 = _interopRequireDefault(__webpack_require__(9152));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(9451));
var _inherits2 = _interopRequireDefault(__webpack_require__(9346));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5268));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3910));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(6604));
var _plugin = __webpack_require__(481);
var _pluginWebview = __webpack_require__(8522);
var _events = _interopRequireDefault(__webpack_require__(3683));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var DocViewer = /*#__PURE__*/function (_PluginClient) {
  (0, _inherits2["default"])(DocViewer, _PluginClient);
  var _super = _createSuper(DocViewer);
  function DocViewer() {
    var _this;
    (0, _classCallCheck2["default"])(this, DocViewer);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mdFile", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "eventEmitter", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "refreshId", void 0);
    _this.eventEmitter = new _events["default"]();
    _this.methods = ['viewDocs'];
    (0, _pluginWebview.createClient)((0, _assertThisInitialized2["default"])(_this));
    _this.mdFile = '';
    _this.onload();
    return _this;
  }
  (0, _createClass2["default"])(DocViewer, [{
    key: "refresh",
    value: function () {
      var _refresh = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var contents;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.mdFile) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return", clearInterval(this.refreshId));
              case 2:
                _context.next = 4;
                return this.call('fileManager', 'readFile', this.mdFile);
              case 4:
                contents = _context.sent;
                this.eventEmitter.emit('contentsReady', contents);
              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function refresh() {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }()
  }, {
    key: "viewDocs",
    value: function () {
      var _viewDocs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(docs) {
        var _this2 = this;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.mdFile = docs[0];
                this.refresh();
                this.refreshId = setInterval( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
                  return _regenerator["default"].wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _this2.refresh();
                        case 1:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                })), 500);
              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function viewDocs(_x) {
        return _viewDocs.apply(this, arguments);
      }
      return viewDocs;
    }()
  }]);
  return DocViewer;
}(_plugin.PluginClient);
exports.DocViewer = DocViewer;

/***/ }),

/***/ 2002:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(7085);
var _react = _interopRequireDefault(__webpack_require__(7182));
var _client = __webpack_require__(8244);
var _App = _interopRequireDefault(__webpack_require__(1753));
var _jsxDevRuntime = __webpack_require__(6872);
var _jsxFileName = "/workspaces/remix-project/apps/doc-viewer/src/main.tsx";
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(2002)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map