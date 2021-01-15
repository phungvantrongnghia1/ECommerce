"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCedentialsError = void 0;
const routing_controllers_1 = require("routing-controllers");
class InvalidCedentialsError extends routing_controllers_1.HttpError {
    constructor() {
        super(401);
        Object.setPrototypeOf(this, InvalidCedentialsError.prototype);
    }
    toJSON() {
        return {
            type: "InvalidCredentials",
            options: {},
            status: "ERROR",
        };
    }
}
exports.InvalidCedentialsError = InvalidCedentialsError;
//# sourceMappingURL=InvalidCedentialsError.js.map