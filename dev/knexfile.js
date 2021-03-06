"use strict";
// Update with your config settings.
module.exports = {
    development: {
        client: "postgresql",
        connection: {
            database: "todolist",
            user: "postgres",
            password: "Password"
        },
    },
    staging: {
        client: "postgresql",
        connection: {
            database: "todolist",
            user: "postgres",
            password: "Password"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    },
    production: {
        client: "postgresql",
        connection: {
            database: "todolist",
            user: "postgres",
            password: "Password"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    }
};
//# sourceMappingURL=knexfile.js.map