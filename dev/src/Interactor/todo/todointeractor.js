"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
class TodoList {
    constructor(knex) {
        this.knex = knex;
    }
    async execute() {
        const result = await this.knex.select("*").from("Todo");
        console.log('result :>> ', result);
        return "alo";
    }
}
exports.TodoList = TodoList;
//# sourceMappingURL=todointeractor.js.map