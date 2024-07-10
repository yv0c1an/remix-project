"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const tslib_1 = require("tslib");
const cors_1 = tslib_1.__importDefault(require("cors"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const provider_1 = require("./provider");
const logs_1 = require("./utils/logs");
class Server {
    constructor(options) {
        this.provider = new provider_1.Provider(options);
        this.provider.init().then(() => {
            (0, logs_1.log)('Provider initiated');
            (0, logs_1.log)('Test accounts:');
            (0, logs_1.log)(Object.keys(this.provider.Accounts.accounts));
        }).catch((error) => {
            (0, logs_1.log)(error);
        });
    }
    start(cliOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const expressWs = (yield Promise.resolve().then(() => tslib_1.__importStar(require('express-ws')))).default;
            const express = (yield Promise.resolve().then(() => tslib_1.__importStar(require('express')))).default;
            const app = express();
            const wsApp = expressWs(app);
            app.use((0, cors_1.default)());
            app.use(body_parser_1.default.urlencoded({ extended: true }));
            app.use(body_parser_1.default.json());
            app.get('/', (req, res) => {
                res.send('Welcome to remix-simulator');
            });
            if (cliOptions.rpc) {
                app.use((req, res) => {
                    if (req && req.body && (req.body.method === 'eth_sendTransaction' || req.body.method === 'eth_call')) {
                        (0, logs_1.log)('Receiving call/transaction:');
                        (0, logs_1.log)(req.body.params);
                    }
                    this.provider.sendAsync(req.body, (err, jsonResponse) => {
                        if (err) {
                            (0, logs_1.error)(err);
                            return res.send(JSON.stringify({ error: err }));
                        }
                        if (req && req.body && (req.body.method === 'eth_sendTransaction' || req.body.method === 'eth_call')) {
                            (0, logs_1.log)(jsonResponse);
                        }
                        res.send(jsonResponse);
                    });
                });
            }
            else {
                wsApp.app.ws('/', (ws, req) => {
                    ws.on('message', (msg) => {
                        const body = JSON.parse(msg.toString());
                        if (body && (body.method === 'eth_sendTransaction' || body.method === 'eth_call')) {
                            (0, logs_1.log)('Receiving call/transaction:');
                            (0, logs_1.log)(body.params);
                        }
                        this.provider.sendAsync(body, (err, jsonResponse) => {
                            if (err) {
                                (0, logs_1.error)(err);
                                return ws.send(JSON.stringify({ error: err }));
                            }
                            if (body && (body.method === 'eth_sendTransaction' || body.method === 'eth_call')) {
                                (0, logs_1.log)(jsonResponse);
                            }
                            ws.send(JSON.stringify(jsonResponse));
                        });
                    });
                    this.provider.on('data', (result) => {
                        ws.send(JSON.stringify(result));
                    });
                });
            }
            app.listen(cliOptions.port, cliOptions.ip, () => {
                if (!cliOptions.rpc) {
                    (0, logs_1.log)('Remix Simulator listening on ws://' + cliOptions.ip + ':' + cliOptions.port);
                    (0, logs_1.log)('http json-rpc is deprecated and disabled by default. To enable it use --rpc');
                }
                else {
                    (0, logs_1.log)('Remix Simulator listening on http://' + cliOptions.ip + ':' + cliOptions.port);
                }
            });
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map