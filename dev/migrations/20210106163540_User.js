"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema.createTable("User", (table) => {
        table.increments();
        table.text("fullname");
        table.text("username").notNullable().unique();
        table.text("password").notNullable();
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable("User");
}
exports.down = down;
// knex migrate:latest
// knex migrate:make --stub 
//# sourceMappingURL=20210106163540_User.js.map