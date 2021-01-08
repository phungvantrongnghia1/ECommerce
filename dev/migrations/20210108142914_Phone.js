"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema.createTable("Category", (table) => {
        table.increments("id").primary();
        table.text("title");
        table.text("description");
    }).then(() => {
        return knex.schema.createTable("Phone", (table) => {
            table.increments("id").primary();
            table.text("title");
            table.text("price");
            table.text("description");
            table.integer("caterory_id").unsigned().references("id").inTable("Category");
        });
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable("Category");
}
exports.down = down;
//# sourceMappingURL=20210108142914_Phone.js.map