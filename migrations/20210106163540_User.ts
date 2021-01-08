import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("User", (table) => {
        table.increments();
        table.text("fullname");
        table.text("username").notNullable().unique();
        table.text("password").notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("User");
}

// knex migrate:latest
// knex migrate:make --stub 