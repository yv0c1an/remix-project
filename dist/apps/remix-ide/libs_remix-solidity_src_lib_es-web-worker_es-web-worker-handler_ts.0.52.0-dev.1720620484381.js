"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["libs_remix-solidity_src_lib_es-web-worker_es-web-worker-handler_ts"],{

/***/ 69005:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(32830));
var _createClass2 = _interopRequireDefault(__webpack_require__(59152));
var ESWebWorkerHandler = /*#__PURE__*/function () {
  function ESWebWorkerHandler() {
    (0, _classCallCheck2["default"])(this, ESWebWorkerHandler);
  }
  (0, _createClass2["default"])(ESWebWorkerHandler, [{
    key: "getWorker",
    value: function getWorker() {
      // @ts-ignore
      return new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("libs_remix-solidity_src_lib_es-web-worker_compiler-worker_ts"), __webpack_require__.b));
    }
  }]);
  return ESWebWorkerHandler;
}();
var _default = ESWebWorkerHandler;
exports["default"] = _default;

/***/ })

}]);
//# sourceMappingURL=libs_remix-solidity_src_lib_es-web-worker_es-web-worker-handler_ts.0.52.0-dev.1720620484381.js.map