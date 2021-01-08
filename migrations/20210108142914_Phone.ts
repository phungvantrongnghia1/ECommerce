import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("Category", (table) => {
        table.increments("id").primary();
        table.text("title");
        table.text("description")
    }).then(() => {
        return knex.schema.createTable("Phone", (table) => {
            table.increments("id").primary();
            table.text("title");
            table.text("price");
            table.text("description")
            table.integer("caterory_id").unsigned().references("id").inTable("Category")
        })
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("Category");
}

