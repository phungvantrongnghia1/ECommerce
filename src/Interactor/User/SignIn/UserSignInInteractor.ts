import Knex from "knex";
import { InvalidCedentialsError } from "../../../errors/InvalidCedentialsError";
import { PasswordHasher } from "../SignUp/Passwordhasher";
import { generateAccessToken } from "../TokenUser";
import { UserByUserNameGetting } from "./actions/UserByUserNameGetting";

export type PayloadSignIn = {
    username: string;
    password: string;
}
export class UserSignInInteractor {
    constructor(private knex:Knex) {}
    async execute(payload:PayloadSignIn){
        const user = await new UserByUserNameGetting(this.knex).execute(payload.username);
        const passwordHasher = new PasswordHasher(10);
        const verifyPassword =await passwordHasher.verify(payload.password,user.password);
        if(user.username !== payload.username || !verifyPassword){
            throw new InvalidCedentialsError();
        }
        const {accessToken} = generateAccessToken(user,"secrit","1h");
        return accessToken;
    }
}