"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserByUserNameGetting = void 0;
const UserNotFound_1 = require("../../../../errors/UserNotFound");
class UserByUserNameGetting {
    constructor(knex) {
        this.knex = knex;
    }
    async execute(username) {
        const user = await this.knex.table("User").where({
            username: username
        }).select("*").first();
        if (!user) {
            throw new UserNotFound_1.UserNotFoundError("User not found");
        }
        return user;
    }
}
exports.UserByUserNameGetting = UserByUserNameGetting;
//# sourceMappingURL=UserByUserNameGetting.js.map