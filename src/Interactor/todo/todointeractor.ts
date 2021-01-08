import Knex from "knex";

export class TodoList {
    constructor (private knex: Knex){

    }
    async execute(){
        const result = await this.knex.select("*").from("Todo");
        console.log('result :>> ', result);
        return "alo"
    }
}