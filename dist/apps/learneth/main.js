(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ 99433:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./loading.ts": 10257,
	"./remixide.ts": 25472,
	"./workshop.ts": 45447
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 99433;

/***/ }),

/***/ 38009:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.router = exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(47182));
var _reactRouterDom = __webpack_require__(588);
var _reactToastify = __webpack_require__(58268);
var _LoadingScreen = _interopRequireDefault(__webpack_require__(59129));
var _Logo = _interopRequireDefault(__webpack_require__(57741));
var _Home = _interopRequireDefault(__webpack_require__(3509));
var _StepList = _interopRequireDefault(__webpack_require__(52432));
var _StepDetail = _interopRequireDefault(__webpack_require__(86190));
__webpack_require__(21217);
__webpack_require__(45520);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/learneth/src/App.tsx";
var router = (0, _reactRouterDom.createHashRouter)([{
  path: '/',
  element: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Logo["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 14
  }, void 0)
}, {
  path: '/home',
  element: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Home["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 14
  }, void 0)
}, {
  path: '/list',
  element: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_StepList["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 14
  }, void 0)
}, {
  path: '/detail',
  element: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_StepDetail["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 14
  }, void 0)
}]);
exports.router = router;
function App() {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactRouterDom.RouterProvider, {
      router: router
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_LoadingScreen["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactToastify.ToastContainer, {
      position: "bottom-right",
      newestOnTop: true,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      autoClose: false,
      theme: "colored"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
var _default = App;
exports["default"] = _default;

/***/ }),

/***/ 50065:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
var _typeof = __webpack_require__(22886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(87794));
var _react = _interopRequireWildcard(__webpack_require__(47182));
var _reactRouterDom = __webpack_require__(588);
var _reactBootstrap = __webpack_require__(6196);
__webpack_require__(74445);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/learneth/src/components/BackButton/index.tsx";
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function BackButton(_ref) {
  var entity = _ref.entity;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var location = (0, _reactRouterDom.useLocation)();
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var isDetailPage = location.pathname === '/detail';
  var queryParams = new URLSearchParams(location.search);
  var stepId = Number(queryParams.get('stepId'));
  var nextStep = entity && entity.steps[stepId + 1];
  var previousStep = entity && entity.steps[stepId - 1];
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("nav", {
    className: "navbar navbar-light bg-light justify-content-between pt-1 pb-1 pl-1",
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("ul", {
      className: "nav mr-auto",
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("li", {
        className: "nav-item",
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          className: "btn back",
          onClick: function onClick() {
            setShow(true);
          },
          role: "button",
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.OverlayTrigger, {
            placement: "right",
            overlay: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Tooltip, {
              id: "tooltip-right",
              children: "Leave tutorial"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 56
            }, this),
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
              className: "fas fa-home pl-1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), isDetailPage && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("li", {
        className: "nav-item",
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactRouterDom.Link, {
          className: "btn",
          to: "/list?id=".concat(entity.id),
          title: "Tutorial menu",
          onClick: function onClick() {
            return window._paq.push(['trackEvent', 'learneth', 'back_to_menu_step', entity && entity.name]);
          },
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
            className: "fas fa-bars"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), isDetailPage && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("form", {
      className: "form-inline",
      children: [stepId > 0 && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactRouterDom.Link, {
        to: "/detail?id=".concat(entity.id, "&stepId=").concat(stepId - 1),
        onClick: function onClick() {
          return window._paq.push(['trackEvent', 'learneth', 'previous_step', "".concat(entity.name, "/").concat(previousStep && previousStep.name)]);
        },
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
          className: "fas fa-chevron-left pr-1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, this), stepId + 1, "/", entity && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "",
        children: entity.steps.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 35
      }, this), stepId < entity.steps.length - 1 && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactRouterDom.Link, {
        to: "/detail?id=".concat(entity.id, "&stepId=").concat(stepId + 1),
        onClick: function onClick() {
          return window._paq.push(['trackEvent', 'learneth', 'next_step', "".concat(entity.name, "/").concat(nextStep && nextStep.name)]);
        },
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
          className: "fas fa-chevron-right pl-1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Modal, {
      show: show,
      onHide: function onHide() {
        setShow(false);
      },
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Modal.Header, {
        placeholder: '',
        closeButton: true,
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Modal.Title, {
          children: "Leave tutorial"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Modal.Body, {
        children: "Are you sure you want to leave the tutorial?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Modal.Footer, {
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Button, {
          variant: "secondary",
          onClick: function onClick() {
            setShow(false);
          },
          children: "No"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Button, {
          variant: "success",
          onClick: function onClick() {
            setShow(false);
            navigate('/home');
            window._paq.push(['trackEvent', 'learneth', 'leave_tutorial', entity && entity.name]);
          },
          children: "Yes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
var _default = BackButton;
exports["default"] = _default;

/***/ }),

/***/ 59129:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(47182));
var _BounceLoader = _interopRequireDefault(__webpack_require__(43711));
__webpack_require__(78912);
var _hooks = __webpack_require__(25344);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/learneth/src/components/LoadingScreen/index.tsx",
  _this = void 0;
var LoadingScreen = function LoadingScreen() {
  var loading = (0, _hooks.useAppSelector)(function (state) {
    return state.loading.screen;
  });
  return loading ? /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    className: "spinnersOverlay",
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_BounceLoader["default"], {
      color: "#a7b0ae",
      size: 100,
      className: "spinnersLoading"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this) : null;
};
var _default = LoadingScreen;
exports["default"] = _default;

/***/ }),

/***/ 17073:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
var _typeof = __webpack_require__(22886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(87794));
var _react = _interopRequireWildcard(__webpack_require__(47182));
var _reactBootstrap = __webpack_require__(6196);
var _hooks = __webpack_require__(25344);
__webpack_require__(31076);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/learneth/src/components/RepoImporter/index.tsx";
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function RepoImporter(_ref) {
  var _this = this;
  var list = _ref.list,
    selectedRepo = _ref.selectedRepo;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    name = _useState4[0],
    setName = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    branch = _useState6[0],
    setBranch = _useState6[1];
  var dispatch = (0, _hooks.useAppDispatch)();
  (0, _react.useEffect)(function () {
    setName(selectedRepo.name);
    setBranch(selectedRepo.branch);
  }, [selectedRepo]);
  var panelChange = function panelChange() {
    setOpen(!open);
  };
  var selectRepo = function selectRepo(repo) {
    dispatch({
      type: 'workshop/loadRepo',
      payload: repo
    });
    window._paq.push(['trackEvent', 'learneth', 'select_repo', "".concat(name, "/").concat(branch)]);
  };
  var importRepo = function importRepo(event) {
    event.preventDefault();
    dispatch({
      type: 'workshop/loadRepo',
      payload: {
        name: name,
        branch: branch
      }
    });
    window._paq.push(['trackEvent', 'learneth', 'import_repo', "".concat(name, "/").concat(branch)]);
  };
  var resetAll = function resetAll() {
    dispatch({
      type: 'workshop/resetAll'
    });
    setName('');
    setBranch('');
  };
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
    children: [selectedRepo.name && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "container-fluid mb-3 small mt-3",
      children: ["Tutorials from:", /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("h4", {
        className: "mb-1",
        children: selectedRepo.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
        className: "",
        children: ["Date modified: ", new Date(selectedRepo.datemodified).toLocaleString()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      onClick: panelChange,
      style: {
        cursor: 'pointer'
      },
      className: "container-fluid d-flex mb-3 small",
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "d-flex pr-2 pl-2",
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
          className: "arrow-icon pt-1 fas fa-xs ".concat(open ? 'fa-chevron-down' : 'fa-chevron-right')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "d-flex",
        children: "Import another tutorial repo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), open && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "container-fluid",
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Dropdown, {
        className: "w-100",
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Dropdown.Toggle, {
          className: "btn btn-secondary w-100",
          id: "dropdownBasic1",
          children: "Select a repo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Dropdown.Menu, {
          className: "w-100",
          children: list.map(function (item) {
            return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Dropdown.Item, {
              onClick: function onClick() {
                selectRepo(item);
              },
              children: [item.name, "-", item.branch]
            }, "".concat(item.name, "/").concat(item.branch), true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        onClick: resetAll,
        className: "small mb-3",
        style: {
          cursor: 'pointer'
        },
        children: "reset list"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "container-fluid mt-3",
      children: [open && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Form, {
        onSubmit: importRepo,
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Form.Group, {
          className: "form-group",
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Form.Label, {
            className: "mr-2",
            htmlFor: "name",
            children: "REPO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 15
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.OverlayTrigger, {
            placement: "right",
            overlay: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Tooltip, {
              id: "tooltip-right",
              children: "ie username/repository"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 58
            }, this),
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
              className: "fas fa-question-circle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 15
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Form.Control, {
            id: "name",
            required: true,
            onChange: function onChange(e) {
              setName(e.target.value);
            },
            value: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Form.Label, {
            htmlFor: "branch",
            children: "BRANCH"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Form.Control, {
            id: "branch",
            required: true,
            onChange: function onChange(e) {
              setBranch(e.target.value);
            },
            value: branch
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactBootstrap.Button, {
          className: "btn btn-success start w-100",
          type: "submit",
          disabled: !name || !branch,
          children: ["Import ", name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("a", {
          href: "https://github.com/bunsenstraat/remix-learneth-plugin/blob/master/README.md",
          className: "d-none",
          target: "_blank",
          rel: "noreferrer",
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
            className: "fas fa-info-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 15
          }, this), " how to setup your repo"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
var _default = RepoImporter;
exports["default"] = _default;

/***/ }),

/***/ 18788:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
var _typeof = __webpack_require__(22886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(87794));
var _react = _interopRequireWildcard(__webpack_require__(47182));
var _reactTransitionGroup = __webpack_require__(14014);
__webpack_require__(23241);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/learneth/src/components/SlideIn/index.tsx",
  _this = void 0;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SlideIn = function SlideIn(_ref) {
  var children = _ref.children;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  (0, _react.useEffect)(function () {
    setShow(true);
  }, []);
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactTransitionGroup.CSSTransition, {
    "in": show,
    timeout: 400,
    classNames: "slide",
    unmountOnExit: true,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};
var _default = SlideIn;
exports["default"] = _default;

/***/ }),

/***/ 2002:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
var _react = _interopRequireDefault(__webpack_require__(47182));
var _client = _interopRequireDefault(__webpack_require__(78244));
var _reactRedux = __webpack_require__(62896);
__webpack_require__(35607);
var _App = _interopRequireDefault(__webpack_require__(38009));
var _store = __webpack_require__(13458);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/learneth/src/main.tsx";
var root = _client["default"].createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactRedux.Provider, {
  store: _store.store,
  children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_App["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, void 0)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 3
}, void 0));

/***/ }),

/***/ 3509:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
var _typeof = __webpack_require__(22886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(35627));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(87794));
var _react = _interopRequireWildcard(__webpack_require__(47182));
var _reactRouterDom = __webpack_require__(588);
var _reactMarkdown = _interopRequireDefault(__webpack_require__(26597));
var _rehypeRaw = _interopRequireDefault(__webpack_require__(36873));
var _remarkGfm = _interopRequireDefault(__webpack_require__(44081));
var _hooks = __webpack_require__(25344);
var _RepoImporter = _interopRequireDefault(__webpack_require__(17073));
__webpack_require__(74915);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/learneth/src/pages/Home/index.tsx";
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function HomePage() {
  var _this = this;
  var _React$useState = _react["default"].useState([]),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    openKeys = _React$useState2[0],
    setOpenKeys = _React$useState2[1];
  var isOpen = function isOpen(key) {
    return openKeys.includes(key);
  };
  var handleClick = function handleClick(key) {
    setOpenKeys(isOpen(key) ? openKeys.filter(function (item) {
      return item !== key;
    }) : [].concat((0, _toConsumableArray2["default"])(openKeys), [key]));
  };
  var dispatch = (0, _hooks.useAppDispatch)();
  var _useAppSelector = (0, _hooks.useAppSelector)(function (state) {
      return state.workshop;
    }),
    list = _useAppSelector.list,
    detail = _useAppSelector.detail,
    selectedId = _useAppSelector.selectedId;
  var selectedRepo = detail[selectedId];
  var levelMap = {
    1: 'Beginner',
    2: 'Intermediate',
    3: 'Advanced'
  };
  (0, _react.useEffect)(function () {
    dispatch({
      type: 'workshop/init'
    });
  }, []);
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    className: "App",
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_RepoImporter["default"], {
      list: list,
      selectedRepo: selectedRepo || {}
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), selectedRepo && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "container-fluid",
      children: Object.keys(selectedRepo.group).map(function (level) {
        return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
            className: "mb-2 border-bottom small",
            children: [levelMap[level], ":"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, _this), selectedRepo.group[level].map(function (item) {
            var _selectedRepo$entitie, _selectedRepo$entitie2;
            return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
              children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
                  className: "arrow-icon",
                  onClick: function onClick() {
                    handleClick(item.id);
                  },
                  children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
                    className: "fas fa-xs ".concat(isOpen(item.id) ? 'fa-chevron-down' : 'fa-chevron-right')
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
                  className: "workshop-link",
                  onClick: function onClick() {
                    handleClick(item.id);
                  },
                  children: selectedRepo.entities[item.id].name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactRouterDom.Link, {
                  onClick: function onClick() {
                    return window._paq.push(['trackEvent', 'learneth', 'start_workshop', selectedRepo.entities[item.id].name]);
                  },
                  to: "/list?id=".concat(item.id),
                  className: "text-decoration-none float-right",
                  children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("i", {
                    className: "fas fa-play-circle fa-lg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                className: "container-fluid bg-light pt-3 mt-2 ".concat(isOpen(item.id) ? '' : 'description-collapsed'),
                children: [levelMap[level] && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
                  className: "tag pt-2 pr-1 font-weight-bold small text-uppercase",
                  children: levelMap[level]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 41
                }, _this), (_selectedRepo$entitie = selectedRepo.entities[item.id].metadata.data.tags) == null ? void 0 : _selectedRepo$entitie.map(function (tag) {
                  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
                    className: "tag pr-1 font-weight-bold small text-uppercase",
                    children: tag
                  }, tag, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 23
                  }, _this);
                }), selectedRepo.entities[item.id].steps && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                  className: "d-none",
                  children: [selectedRepo.entities[item.id].steps.length, " step(s)"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 62
                }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                  className: "workshop-list_description pb-3 pt-3",
                  children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactMarkdown["default"], {
                    rehypePlugins: [_rehypeRaw["default"]],
                    remarkPlugins: [_remarkGfm["default"]],
                    children: (_selectedRepo$entitie2 = selectedRepo.entities[item.id].description) == null ? void 0 : _selectedRepo$entitie2.content
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                  className: "actions"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                className: "mb-3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 19
              }, _this)]
            }, item.id, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, _this);
          })]
        }, level, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
var _default = HomePage;
exports["default"] = _default;

/***/ }),

/***/ 57741:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(22886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(47182));
var _hooks = __webpack_require__(25344);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/learneth/src/pages/Logo/index.tsx",
  _this = void 0;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var LogoPage = function LogoPage() {
  var dispatch = (0, _hooks.useAppDispatch)();
  (0, _react.useEffect)(function () {
    dispatch({
      type: 'remixide/connect'
    });
  }, []);
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("img", {
        className: "w-100",
        src: "https://remix.ethereum.org/assets/img/remixLogo.webp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};
var _default = LogoPage;
exports["default"] = _default;

/***/ }),

/***/ 86190:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
var _typeof = __webpack_require__(22886);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(47182));
var _reactRouterDom = __webpack_require__(588);
var _reactMarkdown = _interopRequireDefault(__webpack_require__(26597));
var _rehypeRaw = _interopRequireDefault(__webpack_require__(36873));
var _BackButton = _interopRequireDefault(__webpack_require__(50065));
var _hooks = __webpack_require__(25344);
__webpack_require__(77806);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/learneth/src/pages/StepDetail/index.tsx";
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function StepDetailPage() {
  var _step$markdown,
    _step$test,
    _step$answer,
    _step$answer2,
    _this = this,
    _step$answer3;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var location = (0, _reactRouterDom.useLocation)();
  var dispatch = (0, _hooks.useAppDispatch)();
  var queryParams = new URLSearchParams(location.search);
  var id = queryParams.get('id');
  var stepId = Number(queryParams.get('stepId'));
  var _useAppSelector = (0, _hooks.useAppSelector)(function (state) {
      return state;
    }),
    _useAppSelector$works = _useAppSelector.workshop,
    detail = _useAppSelector$works.detail,
    selectedId = _useAppSelector$works.selectedId,
    _useAppSelector$remix = _useAppSelector.remixide,
    errorLoadingFile = _useAppSelector$remix.errorLoadingFile,
    errors = _useAppSelector$remix.errors,
    success = _useAppSelector$remix.success;
  var entity = detail[selectedId].entities[id];
  var steps = entity.steps;
  var step = steps[stepId];
  console.log(step);
  (0, _react.useEffect)(function () {
    dispatch({
      type: 'remixide/displayFile',
      payload: step
    });
    dispatch({
      type: 'remixide/save',
      payload: {
        errors: [],
        success: false
      }
    });
    window.scrollTo(0, 0);
  }, [step]);
  (0, _react.useEffect)(function () {
    if (errors.length > 0 || success) {
      window.scrollTo(0, document.documentElement.scrollHeight);
    }
  }, [errors, success]);
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "fixed-top",
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "bg-light",
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_BackButton["default"], {
          entity: entity
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      id: "top"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), errorLoadingFile ? /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "errorloadingspacer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("h1", {
        className: "pl-3 pr-3 pt-3 pb-1",
        children: step.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
        className: "w-100nav-item rounded-0 nav-link btn btn-success test",
        onClick: function onClick() {
          dispatch({
            type: 'remixide/displayFile',
            payload: step
          });
        },
        children: "Load the file"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "mb-4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "menuspacer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("h1", {
        className: "pr-3 pl-3 pt-3 pb-1",
        children: step.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }, this)]
    }, void 0, true), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactMarkdown["default"], {
        rehypePlugins: [_rehypeRaw["default"]],
        children: (_step$markdown = step.markdown) == null ? void 0 : _step$markdown.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), (_step$test = step.test) != null && _step$test.content ? /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("nav", {
        className: "nav nav-pills nav-fill",
        children: errorLoadingFile ? /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
          className: "nav-item rounded-0 nav-link btn btn-warning test",
          onClick: function onClick() {
            dispatch({
              type: 'remixide/displayFile',
              payload: step
            });
          },
          children: "Load the file"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }, this) : /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
          children: !errorLoadingFile ? /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
              className: "nav-item rounded-0 nav-link btn btn-info test",
              onClick: function onClick() {
                dispatch({
                  type: 'remixide/testStep',
                  payload: step
                });
              },
              children: "Check Answer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 21
            }, this), ((_step$answer = step.answer) == null ? void 0 : _step$answer.content) && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
              className: "nav-item rounded-0 nav-link btn btn-warning test",
              onClick: function onClick() {
                dispatch({
                  type: 'remixide/showAnswer',
                  payload: step
                });
              },
              children: "Show answer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 23
            }, this)]
          }, void 0, true) : /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
            children: !errorLoadingFile && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
              children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
                className: "nav-item rounded-0 nav-link btn btn-success test",
                onClick: function onClick() {
                  navigate(stepId === steps.length - 1 ? "/list?id=".concat(id) : "/detail?id=".concat(id, "&stepId=").concat(stepId + 1));
                },
                children: "Next"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 25
              }, this), ((_step$answer2 = step.answer) == null ? void 0 : _step$answer2.content) && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
                className: "nav-item rounded-0 nav-link btn btn-warning test",
                onClick: function onClick() {
                  dispatch({
                    type: 'remixide/showAnswer',
                    payload: step
                  });
                },
                children: "Show answer"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 27
              }, this)]
            }, void 0, true)
          }, void 0, false)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, this), success && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
        className: "w-100 rounded-0 nav-item nav-link btn btn-success",
        onClick: function onClick() {
          navigate(stepId === steps.length - 1 ? "/list?id=".concat(id) : "/detail?id=".concat(id, "&stepId=").concat(stepId + 1));
        },
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 13
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        id: "errors",
        children: [success && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          className: "alert rounded-0 alert-success mb-0 mt-0",
          role: "alert",
          children: "Well done! No errors."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 15
        }, this), errors.length > 0 && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
          children: [!success && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
            className: "alert rounded-0 alert-danger mb-0 mt-0",
            role: "alert",
            children: "Errors"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 19
          }, this), errors.map(function (error, index) {
            return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
              className: "alert rounded-0 alert-warning mb-0 mt-0",
              children: error
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 19
            }, _this);
          })]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("nav", {
        className: "nav nav-pills nav-fill",
        children: !errorLoadingFile && ((_step$answer3 = step.answer) == null ? void 0 : _step$answer3.content) && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
          className: "nav-item rounded-0 nav-link btn btn-warning test",
          onClick: function onClick() {
            dispatch({
              type: 'remixide/showAnswer',
              payload: step
            });
          },
          children: "Show answer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }, this), stepId < steps.length - 1 && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
        className: "w-100 btn btn-success",
        onClick: function onClick() {
          navigate("/detail?id=".concat(id, "&stepId=").concat(stepId + 1));
          window._paq.push(['trackEvent', 'learneth', 'navigate_next', "".concat(id, "/").concat(stepId + 1)]);
        },
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 13
      }, this), stepId === steps.length - 1 && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
        className: "w-100 btn btn-success",
        onClick: function onClick() {
          navigate("/list?id=".concat(id));
          window._paq.push(['trackEvent', 'learneth', 'navigate_finish', id]);
        },
        children: "Finish tutorial"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 13
      }, this)]
    }, void 0, true)]
  }, void 0, true);
}
var _default = StepDetailPage;
exports["default"] = _default;

/***/ }),

/***/ 52432:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(47182));
var _reactRouterDom = __webpack_require__(588);
var _reactMarkdown = _interopRequireDefault(__webpack_require__(26597));
var _BackButton = _interopRequireDefault(__webpack_require__(50065));
var _SlideIn = _interopRequireDefault(__webpack_require__(18788));
var _hooks = __webpack_require__(25344);
__webpack_require__(90833);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/learneth/src/pages/StepList/index.tsx";
function StepListPage() {
  var _this = this;
  var location = (0, _reactRouterDom.useLocation)();
  var queryParams = new URLSearchParams(location.search);
  var id = queryParams.get('id');
  var _useAppSelector = (0, _hooks.useAppSelector)(function (state) {
      return state.workshop;
    }),
    detail = _useAppSelector.detail,
    selectedId = _useAppSelector.selectedId;
  var entity = detail[selectedId].entities[id];
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "fixed-top",
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "bg-light",
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_BackButton["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      id: "top"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("h1", {
      className: "pl-3 pr-3 pt-2 pb-1 menuspacer",
      children: entity.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactMarkdown["default"], {
        children: entity.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_SlideIn["default"], {
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("article", {
        className: "list-group m-3",
        children: entity.steps.map(function (step, i) {
          return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactRouterDom.Link, {
            to: "/detail?id=".concat(id, "&stepId=").concat(i),
            className: "rounded-0 btn btn-light border-bottom text-left steplink",
            onClick: function onClick() {
              return window._paq.push(['trackEvent', 'learneth', 'step_slide_in', "".concat(id, "/").concat(i, "/").concat(step.name)]);
            },
            children: [step.name, " \xBB"]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
var _default = StepListPage;
exports["default"] = _default;

/***/ }),

/***/ 25344:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useAppSelector = exports.useAppDispatch = void 0;
var _reactRedux = __webpack_require__(62896);
var useAppDispatch = _reactRedux.useDispatch;
exports.useAppDispatch = useAppDispatch;
var useAppSelector = _reactRedux.useSelector;
exports.useAppSelector = useAppSelector;

/***/ }),

/***/ 10257:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var Model = {
  namespace: 'loading',
  state: {
    screen: true
  },
  reducers: {
    save: function save(state, _ref) {
      var payload = _ref.payload;
      return Object.assign({}, state, payload);
    }
  },
  effects: {}
};
var _default = Model;
exports["default"] = _default;

/***/ }),

/***/ 25472:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(35627));
var _regenerator = _interopRequireDefault(__webpack_require__(59454));
var _reactToastify = __webpack_require__(58268);
var _remixClient = _interopRequireDefault(__webpack_require__(36443));
var _App = __webpack_require__(38009);
function getFilePath(file) {
  var name = file.split('/');
  return name.length > 1 ? "".concat(name[name.length - 1]) : '';
}
var Model = {
  namespace: 'remixide',
  state: {
    errors: [],
    success: false,
    errorLoadingFile: false
    // theme: '',
  },

  reducers: {
    save: function save(state, _ref) {
      var payload = _ref.payload;
      return Object.assign({}, state, payload);
    }
  },
  effects: {
    connect: /*#__PURE__*/_regenerator["default"].mark(function connect(_, _ref2) {
      var put;
      return _regenerator["default"].wrap(function connect$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              put = _ref2.put;
              _reactToastify.toast.info('connecting to the REMIX IDE');
              _context.next = 4;
              return put({
                type: 'loading/save',
                payload: {
                  screen: true
                }
              });
            case 4:
              _context.next = 6;
              return _remixClient["default"].onload();
            case 6:
              _reactToastify.toast.dismiss();
              _context.next = 9;
              return put({
                type: 'loading/save',
                payload: {
                  screen: false
                }
              });
            case 9:
              window._paq = {
                push: function push(args) {
                  _remixClient["default"].call('matomo', 'track', args);
                }
              };
              _context.next = 12;
              return _App.router.navigate('/home');
            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, connect);
    }),
    displayFile: /*#__PURE__*/_regenerator["default"].mark(function displayFile(_ref3, _ref4) {
      var _step$solidity, _step$js, _step$vy;
      var step, select, put, content, path, _yield$select, detail, selectedId, workshop, isExist;
      return _regenerator["default"].wrap(function displayFile$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              step = _ref3.payload;
              select = _ref4.select, put = _ref4.put;
              content = '';
              path = '';
              if ((_step$solidity = step.solidity) != null && _step$solidity.file) {
                content = step.solidity.content;
                path = getFilePath(step.solidity.file);
              }
              if ((_step$js = step.js) != null && _step$js.file) {
                content = step.js.content;
                path = getFilePath(step.js.file);
              }
              if ((_step$vy = step.vy) != null && _step$vy.file) {
                content = step.vy.content;
                path = getFilePath(step.vy.file);
              }
              if (content) {
                _context2.next = 9;
                break;
              }
              return _context2.abrupt("return");
            case 9:
              window._paq.push(['trackEvent', 'learneth', 'display_file', "".concat(step && step.name, "/").concat(path)]);
              _reactToastify.toast.info("loading ".concat(path, " into IDE"));
              _context2.next = 13;
              return put({
                type: 'loading/save',
                payload: {
                  screen: true
                }
              });
            case 13:
              _context2.next = 15;
              return select(function (state) {
                return state.workshop;
              });
            case 15:
              _yield$select = _context2.sent;
              detail = _yield$select.detail;
              selectedId = _yield$select.selectedId;
              workshop = detail[selectedId];
              console.log('loading ', step, workshop);
              path = ".learneth/".concat(workshop.name, "/").concat(step.name, "/").concat(path);
              _context2.prev = 21;
              _context2.next = 24;
              return _remixClient["default"].call('fileManager', 'exists', path);
            case 24:
              isExist = _context2.sent;
              if (isExist) {
                _context2.next = 28;
                break;
              }
              _context2.next = 28;
              return _remixClient["default"].call('fileManager', 'setFile', path, content);
            case 28:
              _context2.next = 30;
              return _remixClient["default"].call('fileManager', 'switchFile', "".concat(path));
            case 30:
              _context2.next = 32;
              return put({
                type: 'remixide/save',
                payload: {
                  errorLoadingFile: false
                }
              });
            case 32:
              _reactToastify.toast.dismiss();
              _context2.next = 42;
              break;
            case 35:
              _context2.prev = 35;
              _context2.t0 = _context2["catch"](21);
              window._paq.push(['trackEvent', 'learneth', 'display_file_error', _context2.t0.message]);
              _reactToastify.toast.dismiss();
              _reactToastify.toast.error('File could not be loaded. Please try again.');
              _context2.next = 42;
              return put({
                type: 'remixide/save',
                payload: {
                  errorLoadingFile: true
                }
              });
            case 42:
              _context2.next = 44;
              return put({
                type: 'loading/save',
                payload: {
                  screen: false
                }
              });
            case 44:
            case "end":
              return _context2.stop();
          }
        }
      }, displayFile, null, [[21, 35]]);
    }),
    testStep: /*#__PURE__*/_regenerator["default"].mark(function testStep(_ref5, _ref6) {
      var step, select, put, _yield$select2, detail, selectedId, workshop, path, result, success;
      return _regenerator["default"].wrap(function testStep$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              step = _ref5.payload;
              select = _ref6.select, put = _ref6.put;
              _context3.next = 4;
              return put({
                type: 'loading/save',
                payload: {
                  screen: true
                }
              });
            case 4:
              _context3.prev = 4;
              _context3.next = 7;
              return put({
                type: 'remixide/save',
                payload: {
                  success: false
                }
              });
            case 7:
              _context3.next = 9;
              return select(function (state) {
                return state.workshop;
              });
            case 9:
              _yield$select2 = _context3.sent;
              detail = _yield$select2.detail;
              selectedId = _yield$select2.selectedId;
              workshop = detail[selectedId];
              if (!step.solidity.file) {
                _context3.next = 18;
                break;
              }
              path = getFilePath(step.solidity.file);
              path = ".learneth/".concat(workshop.name, "/").concat(step.name, "/").concat(path);
              _context3.next = 18;
              return _remixClient["default"].call('fileManager', 'switchFile', "".concat(path));
            case 18:
              console.log('testing ', step.test.content);
              path = getFilePath(step.test.file);
              path = ".learneth/".concat(workshop.name, "/").concat(step.name, "/").concat(path);
              _context3.next = 23;
              return _remixClient["default"].call('fileManager', 'setFile', path, step.test.content);
            case 23:
              _context3.next = 25;
              return _remixClient["default"].call('solidityUnitTesting', 'testFromPath', path);
            case 25:
              result = _context3.sent;
              console.log('result ', result);
              if (result) {
                _context3.next = 33;
                break;
              }
              _context3.next = 30;
              return put({
                type: 'remixide/save',
                payload: {
                  errors: ['Compiler failed to test this file']
                }
              });
            case 30:
              window._paq.push(['trackEvent', 'learneth', 'test_step_error', 'Compiler failed to test this file']);
              _context3.next = 42;
              break;
            case 33:
              success = result.totalFailing === 0;
              if (!success) {
                _context3.next = 39;
                break;
              }
              _context3.next = 37;
              return put({
                type: 'remixide/save',
                payload: {
                  errors: [],
                  success: true
                }
              });
            case 37:
              _context3.next = 41;
              break;
            case 39:
              _context3.next = 41;
              return put({
                type: 'remixide/save',
                payload: {
                  errors: result.errors.map(function (error) {
                    return error.message;
                  })
                }
              });
            case 41:
              window._paq.push(['trackEvent', 'learneth', 'test_step', success]);
            case 42:
              _context3.next = 50;
              break;
            case 44:
              _context3.prev = 44;
              _context3.t0 = _context3["catch"](4);
              console.log('TESTING ERROR', _context3.t0);
              _context3.next = 49;
              return put({
                type: 'remixide/save',
                payload: {
                  errors: [String(_context3.t0)]
                }
              });
            case 49:
              window._paq.push(['trackEvent', 'learneth', 'test_step_error', _context3.t0]);
            case 50:
              _context3.next = 52;
              return put({
                type: 'loading/save',
                payload: {
                  screen: false
                }
              });
            case 52:
            case "end":
              return _context3.stop();
          }
        }
      }, testStep, null, [[4, 44]]);
    }),
    showAnswer: /*#__PURE__*/_regenerator["default"].mark(function showAnswer(_ref7, _ref8) {
      var step, select, put, content, path, _yield$select3, detail, selectedId, workshop;
      return _regenerator["default"].wrap(function showAnswer$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              step = _ref7.payload;
              select = _ref8.select, put = _ref8.put;
              _context4.next = 4;
              return put({
                type: 'loading/save',
                payload: {
                  screen: true
                }
              });
            case 4:
              _reactToastify.toast.info('loading answer into IDE');
              _context4.prev = 5;
              console.log('loading ', step);
              content = step.answer.content;
              path = getFilePath(step.answer.file);
              _context4.next = 11;
              return select(function (state) {
                return state.workshop;
              });
            case 11:
              _yield$select3 = _context4.sent;
              detail = _yield$select3.detail;
              selectedId = _yield$select3.selectedId;
              workshop = detail[selectedId];
              path = ".learneth/".concat(workshop.name, "/").concat(step.name, "/").concat(path);
              _context4.next = 18;
              return _remixClient["default"].call('fileManager', 'setFile', path, content);
            case 18:
              _context4.next = 20;
              return _remixClient["default"].call('fileManager', 'switchFile', "".concat(path));
            case 20:
              window._paq.push(['trackEvent', 'learneth', 'show_answer', path]);
              _context4.next = 28;
              break;
            case 23:
              _context4.prev = 23;
              _context4.t0 = _context4["catch"](5);
              _context4.next = 27;
              return put({
                type: 'remixide/save',
                payload: {
                  errors: [String(_context4.t0)]
                }
              });
            case 27:
              window._paq.push(['trackEvent', 'learneth', 'show_answer_error', _context4.t0.message]);
            case 28:
              _reactToastify.toast.dismiss();
              _context4.next = 31;
              return put({
                type: 'loading/save',
                payload: {
                  screen: false
                }
              });
            case 31:
            case "end":
              return _context4.stop();
          }
        }
      }, showAnswer, null, [[5, 23]]);
    }),
    testSolidityCompiler: /*#__PURE__*/_regenerator["default"].mark(function testSolidityCompiler(_, _ref9) {
      var put, select, errors;
      return _regenerator["default"].wrap(function testSolidityCompiler$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              put = _ref9.put, select = _ref9.select;
              _context5.prev = 1;
              _context5.next = 4;
              return _remixClient["default"].call('solidity', 'getCompilationResult');
            case 4:
              window._paq.push(['trackEvent', 'learneth', 'test_solidity_compiler']);
              _context5.next = 15;
              break;
            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](1);
              _context5.next = 11;
              return select(function (state) {
                return state.remixide.errors;
              });
            case 11:
              errors = _context5.sent;
              _context5.next = 14;
              return put({
                type: 'remixide/save',
                payload: {
                  errors: [].concat((0, _toConsumableArray2["default"])(errors), ["The `Solidity Compiler` is not yet activated.<br>Please activate it using the `SOLIDITY` button in the `Featured Plugins` section of the homepage.<img class='img-thumbnail mt-3' src='assets/activatesolidity.png'>"])
                }
              });
            case 14:
              window._paq.push(['trackEvent', 'learneth', 'test_solidity_compiler_error', _context5.t0.message]);
            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, testSolidityCompiler, null, [[1, 7]]);
    })
  }
};
var _default = Model;
exports["default"] = _default;

/***/ }),

/***/ 45447:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(35627));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var _regenerator = _interopRequireDefault(__webpack_require__(59454));
var _axios = _interopRequireDefault(__webpack_require__(60014));
var _reactToastify = __webpack_require__(58268);
var _groupBy = _interopRequireDefault(__webpack_require__(56337));
var _pick = _interopRequireDefault(__webpack_require__(18560));
var _remixClient = _interopRequireDefault(__webpack_require__(36443));
var _App = __webpack_require__(38009);
// const apiUrl = 'http://localhost:3001';
var apiUrl = 'https://static.220.14.12.49.clients.your-server.de:3000';
var Model = {
  namespace: 'workshop',
  state: {
    list: [],
    detail: {},
    selectedId: ''
  },
  reducers: {
    save: function save(state, _ref) {
      var payload = _ref.payload;
      return Object.assign({}, state, payload);
    }
  },
  effects: {
    init: /*#__PURE__*/_regenerator["default"].mark(function init(_, _ref2) {
      var put, cache, workshopState;
      return _regenerator["default"].wrap(function init$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              put = _ref2.put;
              cache = localStorage.getItem('workshop.state');
              if (!cache) {
                _context.next = 8;
                break;
              }
              workshopState = JSON.parse(cache);
              _context.next = 6;
              return put({
                type: 'workshop/save',
                payload: workshopState
              });
            case 6:
              _context.next = 10;
              break;
            case 8:
              _context.next = 10;
              return put({
                type: 'workshop/loadRepo',
                payload: {
                  name: 'ethereum/remix-workshops',
                  branch: 'master'
                }
              });
            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, init);
    }),
    loadRepo: /*#__PURE__*/_regenerator["default"].mark(function loadRepo(_ref3, _ref4) {
      var payload, put, select, _yield$select, list, detail, url, _yield$axios$get, data, repoId, _loop, i, workshopState, _detail, selectedId, _detail$selectedId, ids, entities, _i, entity;
      return _regenerator["default"].wrap(function loadRepo$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              payload = _ref3.payload;
              put = _ref4.put, select = _ref4.select;
              _reactToastify.toast.info("loading ".concat(payload.name, "/").concat(payload.branch));
              _context3.next = 5;
              return put({
                type: 'loading/save',
                payload: {
                  screen: true
                }
              });
            case 5:
              _context3.next = 7;
              return select(function (state) {
                return state.workshop;
              });
            case 7:
              _yield$select = _context3.sent;
              list = _yield$select.list;
              detail = _yield$select.detail;
              url = "".concat(apiUrl, "/clone/").concat(encodeURIComponent(payload.name), "/").concat(payload.branch, "?").concat(Math.random());
              console.log('loading ', url);
              _context3.next = 14;
              return _axios["default"].get(url);
            case 14:
              _yield$axios$get = _context3.sent;
              data = _yield$axios$get.data;
              repoId = "".concat(payload.name, "-").concat(payload.branch);
              _loop = /*#__PURE__*/_regenerator["default"].mark(function _loop(i) {
                var _data$entities$data$i, steps, metadataSteps, newSteps, stepKeysWithFile, j, step, k, key;
                return _regenerator["default"].wrap(function _loop$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _data$entities$data$i = data.entities[data.ids[i]], steps = _data$entities$data$i.steps, metadataSteps = _data$entities$data$i.metadata.data.steps;
                        newSteps = [];
                        if (metadataSteps) {
                          newSteps = metadataSteps.map(function (step) {
                            return Object.assign({}, steps.find(function (item) {
                              return item.name === step.path;
                            }), {
                              name: step.name
                            });
                          });
                        } else {
                          newSteps = steps.map(function (step) {
                            return Object.assign({}, step, {
                              name: step.name.replace('_', ' ')
                            });
                          });
                        }
                        stepKeysWithFile = ['markdown', 'solidity', 'test', 'answer', 'js', 'vy'];
                        j = 0;
                      case 5:
                        if (!(j < newSteps.length)) {
                          _context2.next = 26;
                          break;
                        }
                        step = newSteps[j];
                        k = 0;
                      case 8:
                        if (!(k < stepKeysWithFile.length)) {
                          _context2.next = 23;
                          break;
                        }
                        key = stepKeysWithFile[k];
                        if (!step[key]) {
                          _context2.next = 20;
                          break;
                        }
                        _context2.prev = 11;
                        _context2.next = 14;
                        return _remixClient["default"].call('contentImport', 'resolve', step[key].file);
                      case 14:
                        step[key].content = _context2.sent.content;
                        _context2.next = 20;
                        break;
                      case 17:
                        _context2.prev = 17;
                        _context2.t0 = _context2["catch"](11);
                        console.error(_context2.t0);
                      case 20:
                        k++;
                        _context2.next = 8;
                        break;
                      case 23:
                        j++;
                        _context2.next = 5;
                        break;
                      case 26:
                        data.entities[data.ids[i]].steps = newSteps;
                      case 27:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _loop, null, [[11, 17]]);
              });
              i = 0;
            case 19:
              if (!(i < data.ids.length)) {
                _context3.next = 24;
                break;
              }
              return _context3.delegateYield(_loop(i), "t0", 21);
            case 21:
              i++;
              _context3.next = 19;
              break;
            case 24:
              workshopState = {
                detail: Object.assign({}, detail, (0, _defineProperty2["default"])({}, repoId, Object.assign({}, data, {
                  group: (0, _groupBy["default"])(data.ids.map(function (id) {
                    return (0, _pick["default"])(data.entities[id], ['level', 'id']);
                  }), function (item) {
                    return item.level;
                  })
                }, payload))),
                list: detail[repoId] ? list : [].concat((0, _toConsumableArray2["default"])(list), [payload]),
                selectedId: repoId
              };
              _context3.next = 27;
              return put({
                type: 'workshop/save',
                payload: workshopState
              });
            case 27:
              localStorage.setItem('workshop.state', JSON.stringify(workshopState));
              _reactToastify.toast.dismiss();
              _context3.next = 31;
              return put({
                type: 'loading/save',
                payload: {
                  screen: false
                }
              });
            case 31:
              if (!payload.id) {
                _context3.next = 44;
                break;
              }
              _detail = workshopState.detail, selectedId = workshopState.selectedId;
              _detail$selectedId = _detail[selectedId], ids = _detail$selectedId.ids, entities = _detail$selectedId.entities;
              _i = 0;
            case 35:
              if (!(_i < ids.length)) {
                _context3.next = 44;
                break;
              }
              entity = entities[ids[_i]];
              if (!(entity.metadata.data.id === payload.id || _i + 1 === payload.id)) {
                _context3.next = 41;
                break;
              }
              _context3.next = 40;
              return _App.router.navigate("/list?id=".concat(ids[_i]));
            case 40:
              return _context3.abrupt("break", 44);
            case 41:
              _i++;
              _context3.next = 35;
              break;
            case 44:
              window._paq.push(['trackEvent', 'learneth', 'load_repo', payload.name]);
            case 45:
            case "end":
              return _context3.stop();
          }
        }
      }, loadRepo);
    }),
    resetAll: /*#__PURE__*/_regenerator["default"].mark(function resetAll(_, _ref5) {
      var put;
      return _regenerator["default"].wrap(function resetAll$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              put = _ref5.put;
              _context4.next = 3;
              return put({
                type: 'workshop/save',
                payload: {
                  list: [],
                  detail: {},
                  selectedId: ''
                }
              });
            case 3:
              localStorage.removeItem('workshop.state');
              _context4.next = 6;
              return put({
                type: 'workshop/init'
              });
            case 6:
              window._paq.push(['trackEvent', 'learneth', 'reset_all']);
            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, resetAll);
    })
  }
};
var _default = Model;
exports["default"] = _default;

/***/ }),

/***/ 13458:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _regeneratorRuntime2 = __webpack_require__(59454);
var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.store = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(59454));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var _toolkit = __webpack_require__(13075);
var _reduxSaga = _interopRequireDefault(__webpack_require__(20635));
var _effects = __webpack_require__(22601);
var _marked = /*#__PURE__*/_regeneratorRuntime2.mark(rootSaga);
// @ts-expect-error
var context = __webpack_require__(99433);
var models = context.keys().map(function (key) {
  return context(key)["default"];
});
function createReducer(model) {
  var reducers = model.reducers;
  Object.keys(model.effects).forEach(function (key) {
    reducers[key] = function (state, action) {
      return state;
    };
  });
  var slice = (0, _toolkit.createSlice)({
    name: model.namespace,
    initialState: model.state,
    reducers: reducers
  });
  return slice.reducer;
}
var rootReducer = models.reduce(function (prev, model) {
  return Object.assign({}, prev, (0, _defineProperty2["default"])({}, model.namespace, createReducer(model)));
}, {});
function watchEffects(model) {
  return (0, _effects.fork)( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var _loop, key;
    return _regenerator["default"].wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _loop = /*#__PURE__*/_regenerator["default"].mark(function _loop(key) {
              var effect;
              return _regenerator["default"].wrap(function _loop$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      effect = model.effects[key];
                      _context2.next = 3;
                      return (0, _effects.takeEvery)("".concat(model.namespace, "/").concat(key), /*#__PURE__*/_regenerator["default"].mark(function _callee(action) {
                        return _regenerator["default"].wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return (0, _effects.put)({
                                  type: 'loading/save',
                                  payload: (0, _defineProperty2["default"])({}, "".concat(model.namespace, "/").concat(key), true)
                                });
                              case 2:
                                _context.next = 4;
                                return effect(action, {
                                  call: _effects.call,
                                  put: _effects.put,
                                  delay: _effects.delay,
                                  select: _effects.select
                                });
                              case 4:
                                _context.next = 6;
                                return (0, _effects.put)({
                                  type: 'loading/save',
                                  payload: (0, _defineProperty2["default"])({}, "".concat(model.namespace, "/").concat(key), false)
                                });
                              case 6:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));
                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _loop);
            });
            _context3.t0 = _regenerator["default"].keys(model.effects);
          case 2:
            if ((_context3.t1 = _context3.t0()).done) {
              _context3.next = 7;
              break;
            }
            key = _context3.t1.value;
            return _context3.delegateYield(_loop(key), "t2", 5);
          case 5:
            _context3.next = 2;
            break;
          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2);
  }));
}
function rootSaga() {
  return _regenerator["default"].wrap(function rootSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.all)(models.map(function (model) {
            return watchEffects(model);
          }));
        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked);
}
var configureAppStore = function configureAppStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var reduxSagaMonitorOptions = {};
  var sagaMiddleware = (0, _reduxSaga["default"])(reduxSagaMonitorOptions);
  var _middleware = [sagaMiddleware];
  var store = (0, _toolkit.configureStore)({
    reducer: rootReducer,
    middleware: function middleware(gDM) {
      return gDM().concat([].concat(_middleware));
    },
    preloadedState: initialState,
    devTools: "development" !== 'production'
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
var store = configureAppStore();
exports.store = store;

/***/ }),

/***/ 36443:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(32830));
var _createClass2 = _interopRequireDefault(__webpack_require__(59152));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(69451));
var _inherits2 = _interopRequireDefault(__webpack_require__(9346));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(65268));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(83910));
var _plugin = __webpack_require__(80481);
var _pluginWebview = __webpack_require__(98522);
var _store = __webpack_require__(13458);
var _App = __webpack_require__(38009);
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var RemixClient = /*#__PURE__*/function (_PluginClient) {
  (0, _inherits2["default"])(RemixClient, _PluginClient);
  var _super = _createSuper(RemixClient);
  function RemixClient() {
    var _this;
    (0, _classCallCheck2["default"])(this, RemixClient);
    _this = _super.call(this);
    (0, _pluginWebview.createClient)((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }
  (0, _createClass2["default"])(RemixClient, [{
    key: "startTutorial",
    value: function startTutorial(name, branch, id) {
      console.log('start tutorial', name, branch, id);
      void _App.router.navigate('/home');
      _store.store.dispatch({
        type: 'workshop/loadRepo',
        payload: {
          name: name,
          branch: branch,
          id: id
        }
      });
    }
  }, {
    key: "addRepository",
    value: function addRepository(name, branch) {
      console.log('add repo', name, branch);
      void _App.router.navigate('/home');
      _store.store.dispatch({
        type: 'workshop/loadRepo',
        payload: {
          name: name,
          branch: branch
        }
      });
    }
  }]);
  return RemixClient;
}(_plugin.PluginClient);
var _default = new RemixClient();
exports["default"] = _default;

/***/ }),

/***/ 45520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 78912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 31076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 23241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 74915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 74445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 77806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 90833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 35607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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