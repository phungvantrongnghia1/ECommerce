"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignUpInteractor = void 0;
const CreateUserAction_1 = require("./action/CreateUserAction");
const Passwordhasher_1 = require("./Passwordhasher");
class UserSignUpInteractor {
    constructor(knex) {
        this.knex = knex;
    }
    async execute(payload) {
        const passwordhasher = new Passwordhasher_1.PasswordHasher(10);
        const passwordhadHash = await passwordhasher.hash(payload.password);
        const userCreate = { ...payload, password: passwordhadHash };
        const user = await new CreateUserAction_1.CreateUserAction(this.knex).execute(userCreate);
        console.log('passwordhadHash :>> ', passwordhadHash);
        return "Sign up";
    }
}
exports.UserSignUpInteractor = UserSignUpInteractor;
//# sourceMappingURL=UserSignUpInteractor.js.map