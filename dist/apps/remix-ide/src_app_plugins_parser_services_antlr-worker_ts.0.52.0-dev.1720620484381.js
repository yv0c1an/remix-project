/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


var parser;
self.onmessage = function (e) {
  var data = e.data;
  switch (data.cmd) {
    case 'load':
      {
        self.importScripts(e.data.url);
        // @ts-ignore
        parser = SolidityParser;
        self.postMessage({
          cmd: 'loaded'
        });
        break;
      }
    case 'parse':
      if (data.text && parser) {
        try {
          var startTime = performance.now();
          var blocks = parser.parseBlock(data.text, {
            loc: true,
            range: true,
            tolerant: true
          });
          var blockDuration = performance.now() - startTime;
          startTime = performance.now();
          var ast = parser.parse(data.text, {
            loc: true,
            range: true,
            tolerant: true
          });
          var endTime = performance.now();
          self.postMessage({
            cmd: 'parsed',
            timestamp: data.timestamp,
            ast: ast,
            text: data.text,
            file: data.file,
            duration: endTime - startTime,
            blockDuration: blockDuration,
            blocks: blocks
          });
        } catch (e) {
          // do nothing
        }
      }
      break;
  }
};
/******/ })()
;
//# sourceMappingURL=src_app_plugins_parser_services_antlr-worker_ts.0.52.0-dev.1720620484381.js.map