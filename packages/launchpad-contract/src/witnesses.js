"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.witnesses = exports.createLaunchPadrivateState = void 0;
var createLaunchPadrivateState = function (secretKey) { return ({
    secretKey: secretKey,
}); };
exports.createLaunchPadrivateState = createLaunchPadrivateState;
exports.witnesses = {
    local_secret_key: function (state) {
        state.privateState.secretKey;
        return [state.privateState, state.privateState.secretKey];
    },
    convertOpaqueToBytes: function (_a, tokenName) {
        var privateState = _a.privateState;
        var bytes = new TextEncoder().encode(tokenName);
        return [privateState, bytes];
    }
};
