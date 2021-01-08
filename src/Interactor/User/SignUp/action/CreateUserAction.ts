import Knex from "knex";

export class CreateUserAction {
    constructor( private knex:Knex){}
    async execute(data: any){
      const user =  await this.knex.table("User").insert(data);
      console.log('userCreate :>> ', user);
    }
}