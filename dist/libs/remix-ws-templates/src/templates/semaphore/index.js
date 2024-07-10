"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
exports.default = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return {
        // @ts-ignore
        'circuits/semaphore.circom': (yield Promise.resolve().then(() => tslib_1.__importStar(require('raw-loader!./circuits/semaphore.circom')))).default,
        // @ts-ignore
        'circuits/tree.circom': (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./circuits/tree.circom')))).default,
        // @ts-ignore
        'circuits/simple.circom': (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./circuits/simple.circom')))).default,
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
        'README.md': (yield Promise.resolve().then(() => tslib_1.__importStar(require('raw-loader!./README.md')))).default
    };
});
//# sourceMappingURL=index.js.map