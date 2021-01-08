import "reflect-metadata";

import { AppRequest } from "../../middleware";
import {Get, JsonController, Post, Req, Body} from "routing-controllers";
export type PayloadSignup = {
    username: string;
    password: string;
    fullname: string;
}
@JsonController()
export class UserController {
    @Post("/v1/user/signup")
    async getListTodo(@Req() request: AppRequest, @Body() payload: PayloadSignup){
        console.log('payload :>> ', payload);
        return await request.interactor.userSignUpInteractor.execute(payload);
    }
}