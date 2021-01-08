import Knex from "knex";
import { PayloadSignup } from "../../../controllers/UserController";
import { CreateUserAction } from "./action/CreateUserAction";
import {PasswordHasher} from "./Passwordhasher";
export class UserSignUpInteractor {
    constructor(private knex: Knex){}
    async execute(payload: PayloadSignup){
        const passwordhasher =  new PasswordHasher(10);
        const passwordhadHash =await passwordhasher.hash(payload.password);
        const userCreate = {...payload, password: passwordhadHash}
        const user = await new CreateUserAction(this.knex).execute(userCreate);
        console.log('passwordhadHash :>> ', passwordhadHash);
        return "Sign up";
    }
}