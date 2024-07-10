(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ 957:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(43387);
__webpack_require__(57779);
var _WalletConnectRemixClient = __webpack_require__(61257);
var _walletConnectUI = __webpack_require__(20609);
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/walletconnect/src/app/app.tsx";
var remix = new _WalletConnectRemixClient.WalletConnectRemixClient();
remix.initClient();
function App() {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    className: "App",
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("h4", {
      className: "mt-1",
      children: "WalletConnect"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_walletConnectUI.WalletConnectUI, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var _default = App;
exports["default"] = _default;

/***/ }),

/***/ 20609:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletConnectUI = WalletConnectUI;
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/walletconnect/src/app/walletConnectUI.tsx";
function WalletConnectUI() {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    style: {
      display: 'inline-block'
    },
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("w3m-button", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 2002:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
var _react = _interopRequireDefault(__webpack_require__(47182));
var _client = __webpack_require__(78244);
var _app = _interopRequireDefault(__webpack_require__(957));
var _jsxDevRuntime = __webpack_require__(16872);
var _jsxFileName = "/workspaces/remix-project/apps/walletconnect/src/main.tsx";
var container = document.getElementById('root');
if (container) {
  (0, _client.createRoot)(container).render( /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_app["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 32
  }, void 0));
}

/***/ }),

/***/ 61257:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(67085);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletConnectRemixClient = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(59454));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(91544));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(32830));
var _createClass2 = _interopRequireDefault(__webpack_require__(59152));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(69451));
var _inherits2 = _interopRequireDefault(__webpack_require__(9346));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(65268));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(83910));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(86604));
var _plugin = __webpack_require__(80481);
var _pluginWebview = __webpack_require__(98522);
var _react = __webpack_require__(95993);
var _constants = __webpack_require__(62896);
var _events = _interopRequireDefault(__webpack_require__(63683));
var _constant = __webpack_require__(69632);
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var WalletConnectRemixClient = /*#__PURE__*/function (_PluginClient) {
  (0, _inherits2["default"])(WalletConnectRemixClient, _PluginClient);
  var _super = _createSuper(WalletConnectRemixClient);
  function WalletConnectRemixClient() {
    var _this;
    (0, _classCallCheck2["default"])(this, WalletConnectRemixClient);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "web3modal", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ethersConfig", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "chains", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "currentChain", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "internalEvents", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "currentAccount", void 0);
    (0, _pluginWebview.createClient)((0, _assertThisInitialized2["default"])(_this));
    _this.internalEvents = new _events["default"]();
    _this.methods = ['sendAsync', 'init', 'deactivate'];
    _this.onload();
    return _this;
  }
  (0, _createClass2["default"])(WalletConnectRemixClient, [{
    key: "onActivation",
    value: function onActivation() {
      var _this2 = this;
      this.subscribeToEvents();
      this.call('theme', 'currentTheme').then(function (theme) {
        _this2.internalEvents.emit('themeChanged', theme.quality.toLowerCase());
      });
    }
  }, {
    key: "init",
    value: function init() {
      console.log('initializing walletconnect plugin...');
    }
  }, {
    key: "initClient",
    value: function initClient() {
      try {
        var ethersConfig = (0, _react.defaultConfig)({
          metadata: _constant.METADATA,
          rpcUrl: 'https://cloudflare-eth.com'
        });
        this.web3modal = (0, _react.createWeb3Modal)({
          projectId: _constant.PROJECT_ID,
          chains: _constants.constants.chains,
          metadata: _constant.METADATA,
          ethersConfig: ethersConfig
        });
        this.ethersConfig = ethersConfig;
        this.chains = _constants.constants.chains;
      } catch (e) {
        return console.error('Could not get a wallet connection', e);
      }
    }
  }, {
    key: "subscribeToEvents",
    value: function subscribeToEvents() {
      var _this3 = this;
      this.web3modal.subscribeProvider(function (_ref) {
        var address = _ref.address,
          isConnected = _ref.isConnected,
          chainId = _ref.chainId;
        if (isConnected) {
          if (address !== _this3.currentAccount) {
            _this3.currentAccount = address;
            _this3.emit('accountsChanged', [address]);
          }
          if (_this3.currentChain !== chainId) {
            _this3.currentChain = chainId;
            _this3.emit('chainChanged', chainId);
          }
        } else {
          _this3.emit('accountsChanged', []);
          _this3.currentAccount = '';
          _this3.emit('chainChanged', 0);
          _this3.currentChain = 0;
        }
      });
      this.on('theme', 'themeChanged', function (theme) {
        _this3.web3modal.setThemeMode(theme.quality);
      });
    }
  }, {
    key: "sendAsync",
    value: function () {
      var _sendAsync = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var address, provider, message, err;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = this.web3modal.getAddress();
                provider = this.web3modal.getWalletProvider();
                if (!(address && provider)) {
                  _context.next = 23;
                  break;
                }
                if (!(data.method === 'eth_accounts')) {
                  _context.next = 7;
                  break;
                }
                return _context.abrupt("return", {
                  jsonrpc: '2.0',
                  result: [address],
                  id: data.id
                });
              case 7:
                if (!(provider.isMetamask && provider.sendAsync)) {
                  _context.next = 11;
                  break;
                }
                return _context.abrupt("return", new Promise(function (resolve) {
                  //@ts-expect-error sendAsync is a legacy function we know MetaMask supports it
                  provider.sendAsync(data, function (error, response) {
                    if (error) {
                      if (error.data && error.data.originalError && error.data.originalError.data) {
                        resolve({
                          jsonrpc: '2.0',
                          error: error.data.originalError,
                          id: data.id
                        });
                      } else if (error.data && error.data.message) {
                        resolve({
                          jsonrpc: '2.0',
                          error: error.data && error.data,
                          id: data.id
                        });
                      } else {
                        resolve({
                          jsonrpc: '2.0',
                          error: error,
                          id: data.id
                        });
                      }
                    }
                    return resolve(response);
                  });
                }));
              case 11:
                _context.prev = 11;
                _context.next = 14;
                return provider.request(data);
              case 14:
                message = _context.sent;
                return _context.abrupt("return", {
                  jsonrpc: '2.0',
                  result: message,
                  id: data.id
                });
              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](11);
                return _context.abrupt("return", {
                  jsonrpc: '2.0',
                  error: {
                    message: _context.t0.message,
                    code: -32603
                  },
                  id: data.id
                });
              case 21:
                _context.next = 26;
                break;
              case 23:
                err = "Cannot make ".concat(data.method, " request. Remix client is not connected to walletconnect client");
                console.error(err);
                return _context.abrupt("return", {
                  jsonrpc: '2.0',
                  error: {
                    message: err,
                    code: -32603
                  },
                  id: data.id
                });
              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[11, 18]]);
      }));
      function sendAsync(_x) {
        return _sendAsync.apply(this, arguments);
      }
      return sendAsync;
    }()
  }, {
    key: "deactivate",
    value: function () {
      var _deactivate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('deactivating walletconnect plugin...');
                _context2.next = 3;
                return this.web3modal.disconnect();
              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function deactivate() {
        return _deactivate.apply(this, arguments);
      }
      return deactivate;
    }()
  }]);
  return WalletConnectRemixClient;
}(_plugin.PluginClient);
exports.WalletConnectRemixClient = WalletConnectRemixClient;

/***/ }),

/***/ 69632:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PROJECT_ID = exports.METADATA = void 0;
// @ts-ignore
var PROJECT_ID = undefined;
exports.PROJECT_ID = PROJECT_ID;
var METADATA = {
  name: 'Remix IDE',
  description: 'The Native IDE for Web3 Development.',
  url: 'https://remix.ethereum.org/',
  icons: ['https://remix.ethereum.org/favicon.ico']
};
exports.METADATA = METADATA;

/***/ }),

/***/ 56241:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.zora = exports.zkSync = exports.sepolia = exports.saigon = exports.ronin = exports.polygonMumbai = exports.polygon = exports.optimismGoerli = exports.optimism = exports.mainnet = exports.goerli = exports.gnosis = exports.celo = exports.bsc = exports.base = exports.avalanche = exports.aurora = exports.arbitrumGoerli = exports.arbitrum = void 0;
var mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
};
exports.mainnet = mainnet;
var sepolia = {
  chainId: 11155111,
  name: 'Sepolia',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.etherscan.io',
  rpcUrl: 'https://rpc.sepolia.org'
};
exports.sepolia = sepolia;
var goerli = {
  chainId: 5,
  name: 'Goerli',
  currency: 'ETH',
  explorerUrl: 'https://goerli.etherscan.io',
  rpcUrl: 'https://rpc.ankr.com/eth_goerli'
};
exports.goerli = goerli;
var arbitrum = {
  chainId: 42161,
  name: 'Arbitrum',
  currency: 'ETH',
  explorerUrl: 'https://arbiscan.io',
  rpcUrl: 'https://arb1.arbitrum.io/rpc'
};
exports.arbitrum = arbitrum;
var arbitrumGoerli = {
  chainId: 421613,
  name: 'Arbitrum Goerli',
  currency: 'ETH',
  explorerUrl: 'https://goerli.arbiscan.io',
  rpcUrl: 'https://goerli-rollup.arbitrum.io/rpc'
};
exports.arbitrumGoerli = arbitrumGoerli;
var avalanche = {
  chainId: 43114,
  name: 'Avalanche',
  currency: 'AVAX',
  explorerUrl: 'https://snowtrace.io',
  rpcUrl: 'https://api.avax.network/ext/bc/C/rpc'
};
exports.avalanche = avalanche;
var bsc = {
  chainId: 56,
  name: 'Binance Smart Chain',
  currency: 'BNB',
  explorerUrl: 'https://bscscan.com',
  rpcUrl: 'https://rpc.ankr.com/bsc'
};
exports.bsc = bsc;
var optimism = {
  chainId: 10,
  name: 'Optimism',
  currency: 'ETH',
  explorerUrl: 'https://optimistic.etherscan.io',
  rpcUrl: 'https://mainnet.optimism.io'
};
exports.optimism = optimism;
var optimismGoerli = {
  chainId: 420,
  name: 'Optimism Goerli',
  currency: 'ETH',
  explorerUrl: 'https://goerli-optimism.etherscan.io',
  rpcUrl: 'https://goerli.optimism.io'
};
exports.optimismGoerli = optimismGoerli;
var polygon = {
  chainId: 137,
  name: 'Polygon',
  currency: 'MATIC',
  explorerUrl: 'https://polygonscan.com',
  rpcUrl: 'https://polygon-rpc.com'
};
exports.polygon = polygon;
var polygonMumbai = {
  chainId: 80001,
  name: 'Polygon Mumbai',
  currency: 'MATIC',
  explorerUrl: 'https://mumbai.polygonscan.com',
  rpcUrl: 'https://rpc.ankr.com/polygon_mumbai'
};
exports.polygonMumbai = polygonMumbai;
var gnosis = {
  chainId: 100,
  name: 'Gnosis',
  currency: 'xDAI',
  explorerUrl: 'https://gnosis.blockscout.com',
  rpcUrl: 'https://rpc.gnosischain.com'
};
exports.gnosis = gnosis;
var zkSync = {
  chainId: 324,
  name: 'ZkSync',
  currency: 'ETH',
  explorerUrl: 'https://explorer.zksync.io',
  rpcUrl: 'https://mainnet.era.zksync.io'
};
exports.zkSync = zkSync;
var zora = {
  chainId: 7777777,
  name: 'Zora',
  currency: 'ETH',
  explorerUrl: 'https://explorer.zora.energy',
  rpcUrl: 'https://rpc.zora.energy'
};
exports.zora = zora;
var celo = {
  chainId: 42220,
  name: 'Celo',
  currency: 'CELO',
  explorerUrl: 'https://explorer.celo.org/mainnet',
  rpcUrl: 'https://forno.celo.org'
};
exports.celo = celo;
var base = {
  chainId: 8453,
  name: 'Base',
  currency: 'BASE',
  explorerUrl: 'https://basescan.org',
  rpcUrl: 'https://mainnet.base.org'
};
exports.base = base;
var aurora = {
  chainId: 1313161554,
  name: 'Aurora',
  currency: 'ETH',
  explorerUrl: 'https://explorer.aurora.dev',
  rpcUrl: 'https://mainnet.aurora.dev'
};
exports.aurora = aurora;
var ronin = {
  chainId: 2020,
  name: 'Ronin',
  currency: 'RON',
  explorerUrl: 'https://app.roninchain.com',
  rpcUrl: 'https://api.roninchain.com/rpc'
};
exports.ronin = ronin;
var saigon = {
  chainId: 2021,
  name: 'Saigon Testnet',
  currency: 'RON',
  explorerUrl: 'https://saigon-explorer.roninchain.com',
  rpcUrl: 'https://saigon-testnet.roninchain.com/rpc'
};
exports.saigon = saigon;

/***/ }),

/***/ 62896:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.constants = void 0;
var _chains = __webpack_require__(56241);
var constants = {
  chains: [_chains.arbitrum, _chains.arbitrumGoerli, _chains.mainnet, _chains.polygon, _chains.polygonMumbai, _chains.optimism, _chains.optimismGoerli, _chains.goerli, _chains.sepolia, _chains.ronin, _chains.saigon, _chains.aurora, _chains.avalanche, _chains.base, _chains.bsc, _chains.celo, _chains.gnosis, _chains.zkSync, _chains.zora]
};
exports.constants = constants;

/***/ }),

/***/ 43387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 1410:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 97693:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 84374:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 29005:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 75477:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 38087:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 30488:
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