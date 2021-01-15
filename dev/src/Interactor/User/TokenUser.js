"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateAccessToken(tokenUser, jwtSecret, expiresIn) {
    const token = jsonwebtoken_1.default.sign(tokenUser, jwtSecret, {
        algorithm: "HS256",
        header: {
            authrization: true
        },
        expiresIn
    });
    return { accessToken: token };
}
exports.generateAccessToken = generateAccessToken;
//# sourceMappingURL=TokenUser.js.map