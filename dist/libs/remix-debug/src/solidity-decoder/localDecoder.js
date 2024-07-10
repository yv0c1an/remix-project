'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.solidityLocals = void 0;
const tslib_1 = require("tslib");
function solidityLocals(vmtraceIndex, internalTreeCall, stack, memory, storageResolver, calldata, currentSourceLocation, cursor) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const scope = internalTreeCall.findScope(vmtraceIndex);
        if (!scope) {
            const error = { message: 'Can\'t display locals. reason: compilation result might not have been provided' };
            throw error;
        }
        const locals = {};
        memory = formatMemory(memory);
        let anonymousIncr = 1;
        for (const local in scope.locals) {
            const variable = scope.locals[local];
            if (variable.stackDepth < stack.length && (variable.sourceLocation.start <= currentSourceLocation.start || variable.isParameter)) {
                let name = variable.name;
                if (name.indexOf('$') !== -1) {
                    name = '<' + anonymousIncr + '>';
                    anonymousIncr++;
                }
                try {
                    locals[name] = yield variable.type.decodeFromStack(variable.stackDepth, stack, memory, storageResolver, calldata, cursor, variable);
                }
                catch (e) {
                    console.log(e);
                    locals[name] = { error: '<decoding failed - ' + e.message + '>', type: variable && variable.type && variable.type.typeName || 'unknown' };
                }
            }
        }
        return locals;
    });
}
exports.solidityLocals = solidityLocals;
function formatMemory(memory) {
    if (memory instanceof Array) {
        memory = memory.join('').replace(/0x/g, '');
    }
    return memory;
}
//# sourceMappingURL=localDecoder.js.map