'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffsetToColumnConverter = void 0;
const sourceMappingDecoder_1 = require("./sourceMappingDecoder");
class OffsetToColumnConverter {
    constructor(compilerEvent) {
        this.lineBreakPositionsByContent = {};
        this.offsetConversion = {};
        if (compilerEvent) {
            compilerEvent.register('compilationFinished', (success, data, source, input, version) => {
                this.clear();
            });
        }
    }
    offsetToLineColumn(rawLocation, file, sources, asts) {
        if (!this.lineBreakPositionsByContent[file]) {
            for (const filename in asts) {
                const source = asts[filename];
                // source id was string before. in newer versions it has been changed to an integer so we need to check the type here
                if (typeof source.id === 'string')
                    source.id = parseInt(source.id, 10);
                if (source.id === file) {
                    this.lineBreakPositionsByContent[file] = (0, sourceMappingDecoder_1.getLinebreakPositions)(sources[filename].content);
                    break;
                }
            }
        }
        const token = `${rawLocation.start}:${rawLocation.length}:${file}`;
        if (this.offsetConversion[token]) {
            return this.offsetConversion[token];
        }
        else {
            const conversion = (0, sourceMappingDecoder_1.convertOffsetToLineColumn)(rawLocation, this.lineBreakPositionsByContent[file]);
            this.offsetConversion[token] = conversion;
            return conversion;
        }
    }
    clear() {
        this.lineBreakPositionsByContent = {};
        this.offsetConversion = {};
    }
}
exports.OffsetToColumnConverter = OffsetToColumnConverter;
//# sourceMappingURL=offsetToLineColumnConverter.js.map