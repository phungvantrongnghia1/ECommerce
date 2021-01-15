import "reflect-metadata";

import { AppRequest } from "../../middleware";
import {Get, JsonController, Req} from "routing-controllers";
@JsonController()
export class TodoController {
    @Get("/")
    getListTodo(@Req() request: AppRequest){
        console.log('request.user :>> ', request.user);
        return "alo ha"; //request.interactor.todoListInteractor.execute();
    }
}