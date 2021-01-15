"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundError = void 0;
const routing_controllers_1 = require("routing-controllers");
class UserNotFoundError extends routing_controllers_1.HttpError {
    constructor(debugMessage) {
        super(404);
        this.debugMessage = debugMessage;
        Object.setPrototypeOf(this, UserNotFoundError.prototype);
    }
    toJSON() {
        return {
            status: "ERROR",
            type: "UserNotFound",
            debugMessage: this.debugMessage,
        };
    }
}
exports.UserNotFoundError = UserNotFoundError;
//# sourceMappingURL=UserNotFound.js.map