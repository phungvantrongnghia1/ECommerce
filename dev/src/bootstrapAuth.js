"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapAuth = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const bootstrapAuth = (app) => {
    console.log("vooooooooooooooooooooooooooooooooooo");
    const { Strategy, ExtractJwt } = passport_jwt_1.default;
    const jwtStategy = new Strategy({
        secretOrKey: "secrit",
        jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    }, (payload, done) => {
        console.log("payload  ne:>>", payload);
        return done(null, payload);
    });
    passport_1.default.use(jwtStategy);
    passport_1.default.initialize();
    app.use((req, res, next) => {
        console.log("lai vooooooooooooooooooooooooooooooooooo");
        passport_1.default.authenticate("jwt", { session: false }, (error, user, info) => {
            console.log("user :>> ", user);
            console.log("info :>> ", info);
            if (user)
                req.user = user;
            if (error || (info && info.message === "invalid signature")) {
                console.log("error :>> ", error);
                return res.status(404).json({
                    message: "invalid signature",
                });
            }
            next();
        })(req, res, next);
    });
};
exports.bootstrapAuth = bootstrapAuth;
//# sourceMappingURL=bootstrapAuth.js.map