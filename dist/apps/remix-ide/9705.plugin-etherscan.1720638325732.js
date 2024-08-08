"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9705],{

/***/ 39705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// eslint-disable-next-line @typescript-eslint/no-var-requires\nconst snarkjs = require('snarkjs');\n\nconst logger = {\n  info: (...args) => console.log(...args),\n  debug: (...args) => console.log(...args)\n};\n\n(async () => {\n  try {\n    // @ts-ignore\n    await remix.call('circuit-compiler', 'generateR1cs', 'circuits/semaphore.circom');\n\n    const ptau_final = \"https://ipfs-cluster.ethdevops.io/ipfs/QmciCq5JcZQyTLvC9GRanrLBi82ZmSriq1Fr5zANkGHebf\";\n    // @ts-ignore\n    const r1csBuffer = await remix.call('fileManager', 'readFile', 'circuits/.bin/semaphore.r1cs', { encoding: null });\n    // @ts-ignore\n    const r1cs = new Uint8Array(r1csBuffer);\n    const zkey_final = { type: \"mem\" };\n\n    console.log('plonk setup')\n    await snarkjs.plonk.setup(r1cs, ptau_final, zkey_final)\n\n    console.log('exportVerificationKey')\n    const vKey = await snarkjs.zKey.exportVerificationKey(zkey_final)\n    await remix.call('fileManager', 'writeFile', './zk/keys/plonk/verification_key.json', JSON.stringify(vKey, null, 2))\n\n    console.log('save zkey_final')\n    // @ts-ignore\n    await remix.call('fileManager', 'writeFile', './zk/keys/plonk/zkey_final.txt', (zkey_final as any).data, { encoding: null })\n\n    console.log('setup done.')\n\n  } catch (e) {\n    console.error(e.message)\n  }\n})()");

/***/ })

}]);
//# sourceMappingURL=9705.plugin-etherscan.1720638325732.js.map