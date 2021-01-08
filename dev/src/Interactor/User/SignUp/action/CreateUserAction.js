"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserAction = void 0;
class CreateUserAction {
    constructor(knex) {
        this.knex = knex;
    }
    async execute(data) {
        const user = await this.knex.table("User").insert(data);
        console.log('userCreate :>> ', user);
    }
}
exports.CreateUserAction = CreateUserAction;
//# sourceMappingURL=CreateUserAction.js.map