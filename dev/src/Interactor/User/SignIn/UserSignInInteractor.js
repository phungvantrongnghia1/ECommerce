"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignInInteractor = void 0;
const InvalidCedentialsError_1 = require("../../../errors/InvalidCedentialsError");
const Passwordhasher_1 = require("../SignUp/Passwordhasher");
const TokenUser_1 = require("../TokenUser");
const UserByUserNameGetting_1 = require("./actions/UserByUserNameGetting");
class UserSignInInteractor {
    constructor(knex) {
        this.knex = knex;
    }
    async execute(payload) {
        const user = await new UserByUserNameGetting_1.UserByUserNameGetting(this.knex).execute(payload.username);
        const passwordHasher = new Passwordhasher_1.PasswordHasher(10);
        const verifyPassword = await passwordHasher.verify(payload.password, user.password);
        if (user.username !== payload.username || !verifyPassword) {
            throw new InvalidCedentialsError_1.InvalidCedentialsError();
        }
        const { accessToken } = TokenUser_1.generateAccessToken(user, "secrit", "1h");
        return accessToken;
    }
}
exports.UserSignInInteractor = UserSignInInteractor;
//# sourceMappingURL=UserSignInInteractor.js.map