"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knex = void 0;
exports.knex = require('knex')({
    client: 'postgresql',
    connection: {
        host: "localhost",
        user: "postgres",
        password: "Password",
        database: "todolist"
    }
});
//# sourceMappingURL=knex.js.map