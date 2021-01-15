import Knex from "knex";
import { UserNotFoundError } from "../../../../errors/UserNotFound";

export class UserByUserNameGetting {
    constructor(private knex: Knex){}
    async execute(username: string){
        const user = await this.knex.table("User").where({
            username: username
        }).select("*").first();
        if(!user)
        {
            throw new UserNotFoundError("User not found");
        }
        return user;
    }
}