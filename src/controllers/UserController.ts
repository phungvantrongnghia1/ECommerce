import "reflect-metadata";

import { AppRequest } from "../../middleware";
import {Get, JsonController, Post, Req, Body, Res} from "routing-controllers";
import { PayloadSignIn } from "../Interactor/User/SignIn/UserSignInInteractor";
import {Response} from "express";
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
    @Post("/v1/user/signin")
    async SignIn(@Req() request: AppRequest, @Res() response: Response, @Body() payload: PayloadSignIn){
        console.log('payload :>> ', payload);
        const accessToken = await request.interactor.userSignInInteractor.execute(payload);
        response.setHeader("Authrization", accessToken);
        return "Login successs";
        // Check session each other request
    }
}