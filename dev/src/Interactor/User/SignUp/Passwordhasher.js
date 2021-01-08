"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordHasher = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class PasswordHasher {
    constructor(hashSaltLogRounds) {
        this.hashSaltLogRounds = hashSaltLogRounds;
    }
    async hash(password) {
        const salt = await bcrypt_1.default.genSalt(this.hashSaltLogRounds);
        const hash = await bcrypt_1.default.hash(password, salt);
        return hash;
    }
}
exports.PasswordHasher = PasswordHasher;
//# sourceMappingURL=Passwordhasher.js.map