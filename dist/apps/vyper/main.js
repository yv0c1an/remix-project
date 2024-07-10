"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ 957:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(59454));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(91544));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15159));
var _react = __webpack_require__(47182);
var _utils = __webpack_require__(44161);
var _CompilerButton = _interopRequireDefault(__webpack_require__(8188));
var _VyperResult = _interopRequireDefault(__webpack_require__(53845));
var _LocalUrl = _interopRequireDefault(__webpack_require__(13509));
var _Button = _interopRequireDefault(__webpack_require__(88460));
var _Accordion = _interopRequireDefault(__webpack_require__(54584));
__webpack_require__(66819);
var _helper = __webpack_require__(63878);
var _reactBootstrap = __webpack_require__(6196);
var _CompileErrorCard = __webpack_require__(12109);
var _CustomAccordionToggle = _interopRequireDefault(__webpack_require__(35430));
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/vyper/src/app/app.tsx",
  _this = void 0; // Components
var App = function App() {
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    contract = _useState2[0],
    setContract = _useState2[1];
  var _useState3 = (0, _react.useState)(_utils.remixClient.compilerOutput),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    output = _useState4[0],
    _setOutput = _useState4[1];
  var _useState5 = (0, _react.useState)({
      status: 'idle',
      environment: 'remote',
      localUrl: 'http://localhost:8000/'
    }),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    state = _useState6[0],
    setState = _useState6[1];
  var spinnerIcon = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    function start() {
      return _start.apply(this, arguments);
    }
    function _start() {
      _start = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var name;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _utils.remixClient.loaded();
              case 3:
                _utils.remixClient.onFileChange(function (name) {
                  !name.endsWith('.vy') && _utils.remixClient.changeStatus({
                    key: 'none'
                  });
                  _setOutput({});
                  setContract(name);
                });
                _utils.remixClient.onNoFileSelected(function () {
                  return setContract('');
                });
                _context.next = 10;
                break;
              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
              case 10:
                _context.prev = 10;
                _context.next = 13;
                return _utils.remixClient.getContractName();
              case 13:
                name = _context.sent;
                // throw if no file are selected
                setContract(name);
                _context.next = 19;
                break;
              case 17:
                _context.prev = 17;
                _context.t1 = _context["catch"](10);
              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7], [10, 17]]);
      }));
      return _start.apply(this, arguments);
    }
    start();
  }, []);
  (0, _react.useEffect)(function () {
    _utils.remixClient.eventEmitter.on('resetCompilerState', function () {
      resetCompilerResultState();
    });
    return function () {
      _utils.remixClient.eventEmitter.off('resetCompilerState', function () {
        resetCompilerResultState();
      });
    };
  }, []);
  (0, _react.useEffect)(function () {
    _utils.remixClient.eventEmitter.on('setOutput', function (payload) {
      _setOutput(payload);
    });
    return function () {
      _utils.remixClient.eventEmitter.off('setOutput', function (payload) {
        _setOutput(payload);
      });
    };
  }, []);

  /** Update the environment state value */
  function setEnvironment(environment) {
    setState(Object.assign({}, state, {
      environment: environment
    }));
  }
  function setLocalUrl(url) {
    setState(Object.assign({}, state, {
      localUrl: url
    }));
  }
  function compilerUrl() {
    return state.environment === 'remote' ? 'https://vyper2.remixproject.org/' : state.localUrl;
  }
  function resetCompilerResultState() {
    _setOutput(_utils.remixClient.compilerOutput);
  }
  var startingCompilation = function startingCompilation() {
    if (!spinnerIcon.current) return;
    spinnerIcon.current.setAttribute('title', 'compiling...');
    spinnerIcon.current.classList.remove('remixui_bouncingIcon');
    spinnerIcon.current.classList.add('remixui_spinningIcon');
  };
  var _useState7 = (0, _react.useState)(0),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    cloneCount = _useState8[0],
    setCloneCount = _useState8[1];
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("main", {
    id: "vyper-plugin",
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("section", {
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "px-3 pt-3 mb-3 w-100",
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_helper.CustomTooltip, {
          placement: "bottom",
          tooltipText: "Clone a repo of Vyper examples. Switch to the File Explorer to see the examples.",
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Button["default"], {
            "data-id": "add-repository",
            className: "w-100 btn btn-secondary",
            onClick: function onClick() {
              {
                cloneCount === 0 ? _utils.remixClient.cloneVyperRepo() : _utils.remixClient.cloneVyperRepo(cloneCount);
              }
              setCloneCount(function (prev) {
                return ++prev;
              });
            },
            children: "Clone a repo of Vyper examples"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Accordion["default"], {
        className: "border-0 w-100 mb-3 accordion-background",
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          className: "border-0",
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
            className: "",
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_CustomAccordionToggle["default"], {
              eventKey: "0",
              children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
                className: "",
                children: "Advanced Compiler Settings"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Accordion["default"].Collapse, {
            eventKey: "0",
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
              className: "pt-2",
              children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Form, {
                children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                  className: "d-flex flex-row justify-content-around mb-1 mt-2",
                  children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "custom-control custom-radio ".concat(state.environment === 'remote' ? 'd-flex' : 'd-flex cursor-status'),
                    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("input", {
                      type: "radio",
                      id: "remote-compiler",
                      "data-id": "remote-compiler",
                      name: "remote",
                      value: state.environment,
                      checked: state.environment === 'remote',
                      onChange: function onChange() {
                        return setEnvironment('remote');
                      },
                      className: "custom-control-input  ".concat(state.environment === 'remote' ? 'd-flex mr-1' : 'd-flex mr-1 cursor-status')
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 140,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("label", {
                      htmlFor: "remote-compiler",
                      className: "form-check-label custom-control-label",
                      children: "Remote Compiler"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "custom-control custom-radio ".concat(state.environment === 'local' ? 'mr-2' : "cursor-status"),
                    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("input", {
                      id: "local-compiler",
                      "data-id": "local-compiler",
                      checked: state.environment === 'local',
                      type: "radio",
                      name: "local",
                      value: state.environment,
                      onChange: function onChange() {
                        return setEnvironment('local');
                      },
                      className: "custom-control-input  ".concat(state.environment === 'local' ? '' : "cursor-status")
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("label", {
                      htmlFor: "local-compiler",
                      className: "form-check-label custom-control-label",
                      children: "Local Compiler"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_LocalUrl["default"], {
                url: state.localUrl,
                setUrl: setLocalUrl,
                environment: state.environment
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
        className: "px-3 mt-3 mb-3 small text-warning",
        children: ["Specify the", ' ', /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("a", {
          className: "text-warning",
          target: "_blank",
          href: "https://remix-ide.readthedocs.io/en/latest/vyper.html#specify-vyper-version",
          children: "compiler version"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, _this), ' ', "&", ' ', /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("a", {
          className: "text-warning",
          href: "https://remix-ide.readthedocs.io/en/latest/vyper.html#evm-version",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "EVM version"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, _this), ' ', "in the .vy file."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "px-3 w-100 mb-3 mt-1",
        id: "compile-btn",
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_CompilerButton["default"], {
          compilerUrl: compilerUrl(),
          contract: contract,
          setOutput: function setOutput(name, update) {
            return _setOutput(Object.assign({}, output, (0, _defineProperty2["default"])({}, name, update)));
          },
          resetCompilerState: resetCompilerResultState,
          output: output,
          remixClient: _utils.remixClient
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("article", {
        id: "result",
        className: "p-2 mx-3 border-top mt-2",
        children: output && Object.keys(output).length > 0 && output.status !== 'failed' ? /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_VyperResult["default"], {
            output: output,
            plugin: _utils.remixClient
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 15
          }, _this)
        }, void 0, false) : output.status === 'failed' ? /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_CompileErrorCard.CompileErrorCard, {
          output: output,
          plugin: _utils.remixClient
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }, _this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }, _this);
};
var _default = App;
exports["default"] = _default;

/***/ }),

/***/ 12109:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CompileErrorCard = CompileErrorCard;
var _regenerator = _interopRequireDefault(__webpack_require__(59454));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(91544));
var _clipboard = __webpack_require__(29539);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/vyper/src/app/components/CompileErrorCard.tsx";
function CompileErrorCard(props) {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    id: "vyperErrorResult",
    className: " d-flex flex-column p-2 alert alert-danger error vyper-compile-error vyper-panel-width",
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
      "data-id": "error-message",
      className: "text-left",
      style: {
        overflowX: 'hidden',
        textOverflow: 'ellipsis'
      },
      children: props.output.message.trim()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "d-flex flex-column pt-3 align-items-end mb-2",
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
          className: "border border-ai text-ai btn-sm",
          onClick: /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return props.plugin.askGpt(props.output.message);
                  case 2:
                    return _context.abrupt("return", _context.sent);
                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          })),
          children: "Ask RemixAI"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
          className: "ml-3 pt-1 py-1",
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_clipboard.CopyToClipboard, {
            content: props.output.message,
            className: "p-0 m-0 far fa-copy alert alert-danger",
            direction: 'top'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
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

/***/ 8188:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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
var _utils = __webpack_require__(44161);
var _Button = _interopRequireDefault(__webpack_require__(88460));
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/vyper/src/app/components/CompilerButton.tsx";
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function CompilerButton(_ref) {
  var contract = _ref.contract,
    setOutput = _ref.setOutput,
    compilerUrl = _ref.compilerUrl,
    resetCompilerState = _ref.resetCompilerState,
    output = _ref.output,
    remixClient = _ref.remixClient;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    loadingSpinner = _useState2[0],
    setLoadingSpinnerState = _useState2[1];
  if (!contract || !contract) {
    return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Button["default"], {
      disabled: true,
      className: "w-100",
      children: "No contract selected"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }, this);
  }
  if (!(0, _utils.isVyper)(contract)) {
    return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Button["default"], {
      disabled: true,
      className: "w-100",
      children: "Not a vyper contract"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }, this);
  }

  /** Compile a Contract */

  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
      "data-id": "compile",
      onClick: /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoadingSpinnerState(true);
                _context.next = 3;
                return (0, _utils.compileContract)(contract, compilerUrl, setOutput, setLoadingSpinnerState);
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })),
      className: "btn btn-primary w-100 d-block btn-block text-break remixui_disabled mb-1 mt-3",
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "d-flex align-items-center justify-content-center fa-1x",
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
          className: loadingSpinner ? 'fas fa-sync fa-pulse mr-1' : 'fas fa-sync mr-1'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          className: "text-truncate overflow-hidden text-nowrap",
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
            children: "Compile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
            className: "ml-1 text-nowrap",
            children: contract
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
var _default = CompilerButton;
exports["default"] = _default;

/***/ }),

/***/ 35430:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(67085);
var _typeof = __webpack_require__(22886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = CustomAccordionToggle;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15159));
var _react = _interopRequireWildcard(__webpack_require__(47182));
var _AccordionToggle = __webpack_require__(26840);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/vyper/src/app/components/CustomAccordionToggle.tsx";
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function CustomAccordionToggle(_ref) {
  var children = _ref.children,
    eventKey = _ref.eventKey;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    toggleAccordion = _useState2[0],
    setToggleAccordion = _useState2[1];
  var decoratedOnClick = (0, _AccordionToggle.useAccordionToggle)(eventKey, function () {
    return setToggleAccordion(!toggleAccordion);
  });
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    onClick: decoratedOnClick,
    className: "d-flex flex-row justify-content-between align-items-center mx-3",
    children: [children, /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
      className: toggleAccordion ? 'far fa-angle-down' : 'far fa-angle-right'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 13509:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(47182));
var _Form = _interopRequireDefault(__webpack_require__(20969));
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/vyper/src/app/components/LocalUrl.tsx";
function LocalUrlInput(_ref) {
  var url = _ref.url,
    setUrl = _ref.setUrl,
    environment = _ref.environment;
  if (environment === 'remote') {
    return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {}, void 0, false);
  }
  function updateUrl(event) {
    setUrl(event.target.value);
  }
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Form["default"], {
    id: "local-url",
    className: "w-100 px-3",
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Form["default"].Group, {
      controlId: "localUrl",
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Form["default"].Label, {
        children: "Local Compiler Url"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Form["default"].Control, {
        onBlur: updateUrl,
        defaultValue: url,
        type: "email",
        placeholder: "eg http://localhost:8000/compile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Form["default"].Text, {
        className: "text-muted"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var _default = LocalUrlInput;
exports["default"] = _default;

/***/ }),

/***/ 53845:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(59454));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(91544));
var _react = _interopRequireDefault(__webpack_require__(47182));
var _utils = __webpack_require__(44161);
var _clipboard = __webpack_require__(29539);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/vyper/src/app/components/VyperResult.tsx";
function VyperResult(_ref) {
  var output = _ref.output,
    plugin = _ref.plugin;
  if (!output) return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    id: "result",
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
      className: "my-3",
      children: "No contract compiled yet."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }, this);
  if ((0, _utils.isCompilationError)(output)) {
    return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      id: "result",
      className: "error",
      title: output.message,
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
        className: "fas fa-exclamation-circle text-danger"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("pre", {
        "data-id": "error-message",
        className: "px-2 w-100 alert alert-danger",
        style: {
          fontSize: '0.5rem',
          overflowX: 'hidden',
          textOverflow: 'ellipsis'
        },
        children: output.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this);
  }
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "d-flex justify-content-center mx-3 mb-3 mt-1 vyper-panel-width flex-column",
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
        "data-id": "compilation-details",
        className: "btn btn-secondary d-block btn-block",
        onClick: /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return plugin == null ? void 0 : plugin.call('vyperCompilationDetails', 'showDetails', output);
                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })),
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
          children: "Compilation Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "mt-1",
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          className: "input-group input-group mt-3 d-flex flex-row-reverse",
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
            className: "btn-group align-self-start",
            role: "group",
            "aria-label": "Copy to Clipboard",
            children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_clipboard.CopyToClipboard, {
              tip: 'Copy ABI to clipboard',
              getContent: function getContent() {
                var _Object$values$;
                return (_Object$values$ = Object.values(output)[1]) == null ? void 0 : _Object$values$.abi;
              },
              direction: "bottom",
              icon: "far fa-copy",
              children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
                className: "btn remixui_copyButton",
                children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
                  className: "remixui_copyIcon far fa-copy",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
                  children: "ABI"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_clipboard.CopyToClipboard, {
              tip: 'Copy Bytecode to clipboard',
              getContent: function getContent() {
                var _Object$values$2;
                return (_Object$values$2 = Object.values(output)[1]) == null ? void 0 : _Object$values$2.bytecode.object;
              },
              direction: "bottom",
              icon: "far fa-copy",
              children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
                className: "btn remixui_copyButton",
                children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
                  className: "remixui_copyIcon far fa-copy",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
                  children: "Bytecode"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
var _default = VyperResult;
exports["default"] = _default;

/***/ }),

/***/ 28227:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.compile = compile;
exports.compileContract = compileContract;
exports.isCompilationError = void 0;
exports.normalizeContractPath = normalizeContractPath;
exports.toStandardOutput = toStandardOutput;
var _regenerator = _interopRequireDefault(__webpack_require__(59454));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(15159));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(91544));
var _axios = _interopRequireDefault(__webpack_require__(60014));
var _remixClient = __webpack_require__(16987);
var _lodash = _interopRequireDefault(__webpack_require__(5313));
/** Check if the output is an error */
var isCompilationError = function isCompilationError(output) {
  return output.status === 'failed';
};
exports.isCompilationError = isCompilationError;
function normalizeContractPath(contractPath) {
  var paths = contractPath.split('/');
  var filename = paths[paths.length - 1].split('.')[0];
  var folders = '';
  for (var i = 0; i < paths.length - 1; i++) {
    if (i !== paths.length - 1) {
      folders += "".concat(paths[i], "/");
    }
  }
  var resultingPath = "".concat(folders).concat(filename);
  return [folders, resultingPath, filename];
}
function parseErrorString(errorString) {
  // Split the string into lines
  var lines = errorString.trim().split('\n');
  // Extract the line number and message
  var message = errorString.trim();
  var targetLine = lines[2].split(',');
  var tline = lines[2].trim().split(' ')[1].split(':');
  var errorObject = {
    status: 'failed',
    message: message,
    column: tline[1],
    line: tline[0]
  };
  message = null;
  targetLine = null;
  lines = null;
  tline = null;
  return errorObject;
}
var buildError = function buildError(output) {
  if (isCompilationError(output)) {
    var line = output.line;
    if (line) {
      var lineColumnPos = {
        start: {
          line: line - 1,
          column: 10
        },
        end: {
          line: line - 1,
          column: 10
        }
      };
      // remixClient.highlight(lineColumnPos as any, _contract.name, '#e0b4b4')
    } else {
      var _output$message, _output$message2;
      var regex = output == null ? void 0 : (_output$message = output.message) == null ? void 0 : _output$message.match(/line ((\d+):(\d+))+/g);
      var errors = output == null ? void 0 : (_output$message2 = output.message) == null ? void 0 : _output$message2.split(/line ((\d+):(\d+))+/g); // extract error message
      if (regex) {
        var errorIndex = 0;
        regex.map(function (errorLocation) {
          var _message;
          var location = errorLocation == null ? void 0 : errorLocation.replace('line ', '').split(':');
          var message = errors[errorIndex];
          errorIndex = errorIndex + 4;
          if (message && ((_message = message) == null ? void 0 : _message.split('\n\n').length) > 0) {
            try {
              var _message2;
              message = (_message2 = message) == null ? void 0 : _message2.split('\n\n')[message.split('\n\n').length - 1];
            } catch (e) {}
          }
          if ((location == null ? void 0 : location.length) > 0) {
            var _lineColumnPos = {
              start: {
                line: parseInt(location[0]) - 1,
                column: 10
              },
              end: {
                line: parseInt(location[0]) - 1,
                column: 10
              }
            };
            // remixClient.highlight(lineColumnPos as any, _contract.name, message)
          }
        });
      }
    }

    throw new Error(output.message);
  }
};
var compileReturnType = function compileReturnType(output, contract) {
  var _output$compilers$0$v, _output$compilers$, _output$compilers$0$s, _output$compilers$2, _output$compilers$2$s;
  var t = toStandardOutput(contract, output);
  var temp = _lodash["default"].merge(t['contracts'][contract]);
  var normal = normalizeContractPath(contract)[2];
  var abi = temp[normal]['abi'];
  var evm = _lodash["default"].merge(temp[normal]['evm']);
  var dpb = evm.deployedBytecode;
  var runtimeBytecode = evm.bytecode;
  var methodIdentifiers = evm.methodIdentifiers;
  var version = (_output$compilers$0$v = output == null ? void 0 : (_output$compilers$ = output.compilers[0]) == null ? void 0 : _output$compilers$.version) !== null && _output$compilers$0$v !== void 0 ? _output$compilers$0$v : '0.3.10';
  var optimized = (_output$compilers$0$s = output == null ? void 0 : (_output$compilers$2 = output.compilers[0]) == null ? void 0 : (_output$compilers$2$s = _output$compilers$2.settings) == null ? void 0 : _output$compilers$2$s.optimize) !== null && _output$compilers$0$s !== void 0 ? _output$compilers$0$s : true;
  var evmVersion = '';
  var result = {
    contractName: normal,
    abi: abi,
    bytecode: dpb,
    runtimeBytecode: runtimeBytecode,
    ir: '',
    methodIdentifiers: methodIdentifiers,
    version: version,
    evmVersion: evmVersion,
    optimized: optimized
  };
  return result;
};
var fixContractContent = function fixContractContent(content) {
  if (content.length === 0) return;
  var pragmaFound = content.includes('#pragma version ^0.3.10');
  var wrongpragmaFound = content.includes('# pragma version ^0.3.10');
  var evmVerFound = content.includes('#pragma evm-version shanghai');
  var pragma = '#pragma version ^0.3.10';
  var evmVer = '#pragma evm-version shanghai';
  if (evmVerFound === false) {
    content = "".concat(evmVer, "\n").concat(content);
  }
  if (wrongpragmaFound === true) {
    content = content.replace('# pragma version ^0.3.10', '');
  }
  if (pragmaFound === false) {
    content = "".concat(pragma, "\n").concat(content);
  }
  return content;
};

/**
 * Compile the a contract
 * @param url The url of the compiler
 * @param contract The name and content of the contract
 */
function compile(_x, _x2) {
  return _compile.apply(this, arguments);
}
/**
 * Transform Vyper Output to Solidity-like Compiler output
 * @param name Name of the contract file
 * @param compilationResult Result returned by the compiler
 */
function _compile() {
  _compile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(url, contract) {
    var extension, contractName, compilePackage, response, compileCode, result, status, intermediate;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (contract.name) {
              _context.next = 2;
              break;
            }
            throw new Error('Set your Vyper contract file.');
          case 2:
            extension = contract.name.split('.')[1];
            if (!(extension !== 'vy')) {
              _context.next = 5;
              break;
            }
            throw new Error('Use extension .vy for Vyper.');
          case 5:
            contractName = contract['name'];
            compilePackage = {
              manifest: 'ethpm/3',
              sources: (0, _defineProperty2["default"])({}, contractName, {
                content: fixContractContent(contract.content)
              })
            };
            _context.next = 9;
            return _axios["default"].post("".concat(url, "compile"), compilePackage);
          case 9:
            response = _context.sent;
            if (!(response.status === 404)) {
              _context.next = 12;
              break;
            }
            throw new Error("Vyper compiler not found at \"".concat(url, "\"."));
          case 12:
            if (!(response.status === 400)) {
              _context.next = 14;
              break;
            }
            throw new Error("Vyper compilation failed: ".concat(response.statusText));
          case 14:
            compileCode = response.data;
            contractName = null;
            response = null;
            _context.next = 19;
            return _axios["default"].get(url + 'status/' + compileCode, {
              method: 'Get'
            });
          case 19:
            _context.next = 21;
            return _context.sent.data;
          case 21:
            status = _context.sent;
            if (!(status === 'SUCCESS')) {
              _context.next = 31;
              break;
            }
            _context.next = 25;
            return _axios["default"].get(url + 'artifacts/' + compileCode, {
              method: 'Get'
            });
          case 25:
            _context.next = 27;
            return _context.sent.data;
          case 27:
            result = _context.sent;
            return _context.abrupt("return", result);
          case 31:
            if (!(status === 'FAILED')) {
              _context.next = 39;
              break;
            }
            _context.next = 34;
            return _axios["default"].get(url + 'exceptions/' + compileCode, {
              method: 'Get'
            });
          case 34:
            _context.next = 36;
            return _context.sent.data;
          case 36:
            intermediate = _context.sent;
            result = parseErrorString(intermediate[0]);
            return _context.abrupt("return", result);
          case 39:
            _context.next = 41;
            return new Promise(function (resolve) {
              return setTimeout(function () {
                return resolve({});
              }, 3000);
            });
          case 41:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _compile.apply(this, arguments);
}
function toStandardOutput(fileName, compilationResult) {
  var contractName = normalizeContractPath(fileName)[2];
  var compiledAbi = compilationResult['contractTypes'][contractName].abi;
  var deployedBytecode = compilationResult['contractTypes'][contractName].deploymentBytecode.bytecode.replace('0x', '');
  var bytecode = compilationResult['contractTypes'][contractName].runtimeBytecode.bytecode.replace('0x', '');
  var compiledAst = compilationResult['contractTypes'][contractName].ast;
  var methodIds = compilationResult['contractTypes'][contractName].methodIdentifiers;
  var methodIdentifiers = Object.entries(methodIds).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return (0, _defineProperty2["default"])({}, key, value.replace('0x', ''));
  });
  return {
    sources: (0, _defineProperty2["default"])({}, fileName, {
      id: 1,
      ast: compiledAst
    }),
    contracts: (0, _defineProperty2["default"])({}, fileName, (0, _defineProperty2["default"])({}, contractName, {
      // The Ethereum Contract ABI. If empty, it is represented as an empty array.
      // See https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI
      abi: compiledAbi,
      contractName: contractName,
      evm: {
        bytecode: {
          linkReferences: {},
          object: deployedBytecode,
          opcodes: ''
        },
        deployedBytecode: {
          linkReferences: {},
          object: bytecode,
          opcodes: ''
        },
        methodIdentifiers: methodIdentifiers
      }
    }))
  };
}
function compileContract(_x3, _x4, _x5, _x6, _x7) {
  return _compileContract.apply(this, arguments);
}
function _compileContract() {
  _compileContract = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(contract, compilerUrl, setOutput, setLoadingSpinnerState, spinner) {
    var _contract, errorGettingContract, output, data, _contractName, compileResult;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _remixClient.remixClient.eventEmitter.emit('resetCompilerState', {});
            spinner && spinner === true ? setLoadingSpinnerState && setLoadingSpinnerState(true) : null;
            _context2.prev = 2;
            _context2.prev = 3;
            _context2.next = 6;
            return _remixClient.remixClient.getContract();
          case 6:
            _contract = _context2.sent;
            _context2.next = 14;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](3);
            errorGettingContract = {
              status: 'failed',
              message: _context2.t0.message
            };
            _remixClient.remixClient.eventEmitter.emit('setOutput', errorGettingContract);
            return _context2.abrupt("return");
          case 14:
            _remixClient.remixClient.changeStatus({
              key: 'loading',
              type: 'info',
              title: 'Compiling'
            });
            _context2.next = 17;
            return compile(compilerUrl, _contract);
          case 17:
            output = _context2.sent;
            if (!(output.status === 'failed')) {
              _context2.next = 24;
              break;
            }
            _remixClient.remixClient.changeStatus({
              key: 'failed',
              type: 'error',
              title: 'Compilation failed...'
            });
            setLoadingSpinnerState && setLoadingSpinnerState(false);
            _remixClient.remixClient.eventEmitter.emit('setOutput', {
              status: 'failed',
              message: output.message,
              title: 'Error compiling...',
              line: output.line,
              column: output.column,
              key: 1
            });
            output = null;
            return _context2.abrupt("return");
          case 24:
            // SUCCESS
            // remixClient.discardHighlight()
            _remixClient.remixClient.changeStatus({
              key: 'succeed',
              type: 'success',
              title: 'success'
            });
            setLoadingSpinnerState && setLoadingSpinnerState(false);
            data = toStandardOutput(_contract.name, output);
            _remixClient.remixClient.compilationFinish(_contract.name, _contract.content, data);
            _contractName = _contract['name'];
            compileResult = compileReturnType(output, _contractName);
            if (setOutput === null || setOutput === undefined) {
              _remixClient.remixClient.eventEmitter.emit('setOutput', {
                contractName: _contractName,
                compileResult: compileResult
              });
            } else {
              _remixClient.remixClient.eventEmitter.emit('setOutput', {
                contractName: _contractName,
                compileResult: compileResult
              });
            }
            _context2.next = 38;
            break;
          case 33:
            _context2.prev = 33;
            _context2.t1 = _context2["catch"](2);
            _remixClient.remixClient.changeStatus({
              key: 'failed',
              type: 'error',
              title: "1 error occurred ".concat(_context2.t1.message)
            });
            setLoadingSpinnerState && setLoadingSpinnerState(false);
            _remixClient.remixClient.eventEmitter.emit('setOutput', {
              status: 'failed',
              message: _context2.t1.message
            });
          case 38:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 33], [3, 9]]);
  }));
  return _compileContract.apply(this, arguments);
} // Replace with the actual AST type
// Replace with the actual ABI type
/*
export function createCompilationResultMessage(name: string, result: any) {
  if(result.status == 'success') {
    return {
      bytecode: this.state.compilationResult['bytecode'],
      bytecode_runtime: this.state.compilationResult['bytecode_runtime'],
      abi: JSON.stringify(this.state.compilationResult['abi'], null , "\t"),
      ir: this.state.compilationResult['ir']
    }
  } else if(result.status == 'failed' && result.column && result.line) {
    const header = `${name}:${result.line}:${result.column}`
    const body = this.state.compilationResult.message.split(/\r\n|\r|\n/)
    const arr = [header].concat(body).join("\n")
    return {
      bytecode: arr,
      bytecode_runtime: arr,
      abi: arr,
      ir: arr
    }
  } else if(result.status == 'failed') {
    const message = this.state.compilationResult.message
    return {
      bytecode: message,
      bytecode_runtime: message,
      abi: message,
      ir: message
    }
  }
  return {
    bytecode: "",
    bytecode_runtime: "",
    abi: "",
    ir: ""
  }
}
*/

/***/ }),

/***/ 44161:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  contractName: true,
  isVyper: true
};
exports.contractName = contractName;
exports.isVyper = isVyper;
var _compiler = __webpack_require__(28227);
Object.keys(_compiler).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _compiler[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _compiler[key];
    }
  });
});
var _remixClient = __webpack_require__(16987);
Object.keys(_remixClient).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _remixClient[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _remixClient[key];
    }
  });
});
function contractName(fileName) {
  var parts = fileName.split('/');
  return parts[parts.length - 1];
}
function isVyper(name) {
  var parts = name.split('.');
  return parts[parts.length - 1] === 'vy';
}

/***/ }),

/***/ 16987:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.remixClient = exports.RemixClient = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(59454));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(91544));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(32830));
var _createClass2 = _interopRequireDefault(__webpack_require__(59152));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(69451));
var _inherits2 = _interopRequireDefault(__webpack_require__(9346));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(65268));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(83910));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var _pluginWebview = __webpack_require__(98522);
var _plugin = __webpack_require__(80481);
var _compiler = __webpack_require__(28227);
var _events = _interopRequireDefault(__webpack_require__(63683));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var RemixClient = /*#__PURE__*/function (_PluginClient) {
  (0, _inherits2["default"])(RemixClient, _PluginClient);
  var _super = _createSuper(RemixClient);
  function RemixClient() {
    var _this;
    (0, _classCallCheck2["default"])(this, RemixClient);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "client", (0, _pluginWebview.createClient)((0, _assertThisInitialized2["default"])(_this)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "compilerUrl", 'https://vyper2.remixproject.org/');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "compilerOutput", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "eventEmitter", new _events["default"]());
    _this.compilerOutput = {};
    return _this;
  }
  (0, _createClass2["default"])(RemixClient, [{
    key: "loaded",
    value: function loaded() {
      return this.client.onload();
    }

    /** Emit an event when file changed */
  }, {
    key: "onFileChange",
    value: function () {
      var _onFileChange = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(cb) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.client.on('fileManager', 'currentFileChanged', /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(name) {
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            cb(name);
                          case 1:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));
                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }());
              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function onFileChange(_x) {
        return _onFileChange.apply(this, arguments);
      }
      return onFileChange;
    }() /** Emit an event when file changed */
  }, {
    key: "onNoFileSelected",
    value: function () {
      var _onNoFileSelected = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(cb) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.client.on('fileManager', 'noFileSelected', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
                  return _regenerator["default"].wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          cb();
                        case 1:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                })));
              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function onNoFileSelected(_x3) {
        return _onNoFileSelected.apply(this, arguments);
      }
      return onNoFileSelected;
    }()
  }, {
    key: "resetCompilerState",
    value: function resetCompilerState() {
      this.compilerOutput = {};
      this.eventEmitter.emit('resetCompilerState', {});
    }
  }, {
    key: "vyperCompileCustomAction",
    value: function () {
      var _vyperCompileCustomAction = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(action) {
        var contract;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getContract();
              case 2:
                contract = _context5.sent;
                _context5.next = 5;
                return (0, _compiler.compileContract)(contract.name, this.compilerUrl);
              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function vyperCompileCustomAction(_x4) {
        return _vyperCompileCustomAction.apply(this, arguments);
      }
      return vyperCompileCustomAction;
    }() /** Load Ballot contract example into the file manager */
  }, {
    key: "loadContract",
    value: function () {
      var _loadContract = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(_ref3) {
        var name, address, content;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                name = _ref3.name, address = _ref3.address;
                _context6.prev = 1;
                _context6.next = 4;
                return this.client.call('contentImport', 'resolve', address);
              case 4:
                content = _context6.sent;
                _context6.next = 7;
                return this.client.call('fileManager', 'setFile', content.cleanUrl, content.content);
              case 7:
                _context6.next = 9;
                return this.client.call('fileManager', 'switchFile', content.cleanUrl);
              case 9:
                _context6.next = 14;
                break;
              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](1);
                console.log(_context6.t0);
              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 11]]);
      }));
      function loadContract(_x5) {
        return _loadContract.apply(this, arguments);
      }
      return loadContract;
    }()
  }, {
    key: "askGpt",
    value: function () {
      var _askGpt = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(message) {
        var formattedMessage;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(message.length === 0)) {
                  _context7.next = 3;
                  break;
                }
                this.client.call('terminal', 'log', {
                  type: 'log',
                  value: 'kindly send a proper message so I can respond please'
                });
                return _context7.abrupt("return");
              case 3:
                _context7.prev = 3;
                // TODO: remove! no formatting required since already handled on server
                formattedMessage = "\n        ".concat(message, "\n        can you explain why this error occurred and how to fix it?\n      ");
                _context7.next = 7;
                return this.client.call('solcoder', 'error_explaining', message);
              case 7:
                _context7.next = 13;
                break;
              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](3);
                console.error('unable to askGpt');
                console.error(_context7.t0);
              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[3, 9]]);
      }));
      function askGpt(_x6) {
        return _askGpt.apply(this, arguments);
      }
      return askGpt;
    }()
  }, {
    key: "cloneVyperRepo",
    value: function () {
      var _cloneVyperRepo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(count) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                // @ts-ignore
                this.call('notification', 'toast', 'cloning Snekmate Vyper repository...');
                _context8.next = 4;
                return this.call('dgitApi', 'clone', {
                  url: 'https://github.com/pcaversaccio/snekmate',
                  token: null,
                  branch: 'main',
                  singleBranch: false,
                  workspaceName: 'snekmate'
                });
              case 4:
                _context8.next = 6;
                return this.call('dgitApi', 'checkout', {
                  ref: 'v0.0.5',
                  force: true,
                  refresh: true
                });
              case 6:
                this.call(
                // @ts-ignore
                'notification', 'toast', 'Vyper repository cloned, the workspace Vyper has been created.');
                _context8.next = 12;
                break;
              case 9:
                _context8.prev = 9;
                _context8.t0 = _context8["catch"](0);
                // @ts-ignore
                this.call('notification', 'toast', _context8.t0.message);
              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 9]]);
      }));
      function cloneVyperRepo(_x7) {
        return _cloneVyperRepo.apply(this, arguments);
      }
      return cloneVyperRepo;
    }() /** Update the status of the plugin in remix */
  }, {
    key: "changeStatus",
    value: function changeStatus(status) {
      this.client.emit('statusChanged', status);
    }
  }, {
    key: "checkActiveTheme",
    value: function checkActiveTheme() {
      var active = this.client.call('theme', 'currentTheme');
      if (active === 'dark') {
        return 'monokai';
      }
    }

    /** Highlight a part of the editor */
  }, {
    key: "highlight",
    value: function () {
      var _highlight = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(lineColumnPos, name, message) {
        var annotation;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.client.call('editor', 'highlight', lineColumnPos, name);
              case 2:
                /*
                column: -1
                  row: -1
                  text: "browser/Untitled1.sol: Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.↵"
                  type: "warning"
                */
                annotation = {
                  column: 0,
                  row: lineColumnPos.start.line,
                  type: 'error',
                  text: message
                };
                _context9.next = 5;
                return this.client.call('editor', 'addAnnotation', annotation, name);
              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
      function highlight(_x8, _x9, _x10) {
        return _highlight.apply(this, arguments);
      }
      return highlight;
    }() /** Remove current Highlight */
  }, {
    key: "discardHighlight",
    value: function () {
      var _discardHighlight = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.client.call('editor', 'discardHighlight');
              case 2:
                _context10.next = 4;
                return this.client.call('editor', 'clearAnnotations');
              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function discardHighlight() {
        return _discardHighlight.apply(this, arguments);
      }
      return discardHighlight;
    }() /** Get the name of the current contract */
  }, {
    key: "getContractName",
    value: function () {
      var _getContractName = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.client.onload();
              case 2:
                return _context11.abrupt("return", this.client.call('fileManager', 'getCurrentFile'));
              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
      function getContractName() {
        return _getContractName.apply(this, arguments);
      }
      return getContractName;
    }() /** Get the current contract file */
  }, {
    key: "getContract",
    value: function () {
      var _getContract = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12() {
        var name, content;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.getContractName();
              case 2:
                name = _context12.sent;
                if (name) {
                  _context12.next = 5;
                  break;
                }
                throw new Error('No contract selected yet');
              case 5:
                _context12.next = 7;
                return this.client.call('fileManager', 'getFile', name);
              case 7:
                content = _context12.sent;
                return _context12.abrupt("return", {
                  name: name,
                  content: content
                });
              case 9:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
      function getContract() {
        return _getContract.apply(this, arguments);
      }
      return getContract;
    }() /** Emit an event to Remix with compilation result */
  }, {
    key: "compilationFinish",
    value: function compilationFinish(title, content, data) {
      this.client.emit('compilationFinished', title, content, 'vyper', data);
    }
  }]);
  return RemixClient;
}(_plugin.PluginClient);
exports.RemixClient = RemixClient;
var remixClient = new RemixClient();
exports.remixClient = remixClient;

/***/ }),

/***/ 2002:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(67085);
var _react = _interopRequireDefault(__webpack_require__(47182));
var _client = __webpack_require__(78244);
var _app = _interopRequireDefault(__webpack_require__(957));
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/vyper/src/main.tsx";
var container = document.getElementById('root');
if (container) {
  (0, _client.createRoot)(container).render( /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_app["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, void 0));
}

/***/ }),

/***/ 29539:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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

/***/ 66819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 24512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(2002)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map