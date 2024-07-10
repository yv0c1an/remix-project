"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
exports.default = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return {
        // @ts-ignore
        'circuits/rln.circom': (yield Promise.resolve().then(() => tslib_1.__importStar(require('raw-loader!./circuits/rln.circom')))).default,
        // @ts-ignore
        'circuits/utils.circom': (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./circuits/utils.circom')))).default,
        // @ts-ignore
        'circuits/withdraw.circom': (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./circuits/withdraw.circom')))).default,
        // @ts-ignore
        'scripts/groth16/groth16_trusted_setup.ts': (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./scripts/groth16/groth16_trusted_setup.ts')))).default,
        // @ts-ignore
        'scripts/groth16/groth16_zkproof.ts': (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./scripts/groth16/groth16_zkproof.ts')))).default,
        // @ts-ignore
        'scripts/plonk/plonk_trusted_setup.ts': (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./scripts/plonk/plonk_trusted_setup.ts')))).default,
        // @ts-ignore
        'scripts/plonk/plonk_zkproof.ts': (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./scripts/plonk/plonk_zkproof.ts')))).default,
        // @ts-ignore
        'templates/groth16_verifier.sol.ejs': (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./templates/groth16_verifier.sol.ejs')))).default,
        // @ts-ignore
        'templates/plonk_verifier.sol.ejs': (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./templates/plonk_verifier.sol.ejs')))).default,
        // @ts-ignore
        'LICENSE-APACHE': (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./LICENSE-APACHE')))).default,
        // @ts-ignore
        'LICENSE-MIT': (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./LICENSE-MIT')))).default,
        // @ts-ignore
        'README.md': (yield Promise.resolve().then(() => tslib_1.__importStar(require('raw-loader!./README.md')))).default
    };
});
//# sourceMappingURL=index.js.map