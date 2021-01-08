export const knex = require('knex')({
    client: 'postgresql',
    connection: {
      host : "localhost",
      user : "postgres",
      password : "Password",
      database : "todolist"
    }
  });
  