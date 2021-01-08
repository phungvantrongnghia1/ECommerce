import {Application, Request} from "express";
import {TodoList} from "./src/Interactor/todo/todointeractor";
import {UserSignUpInteractor} from "./src/Interactor/User/SignUp/UserSignUpInteractor";
import Knex from "knex";
export interface AppRequest extends Request {
    interactor: {
        todoListInteractor: TodoList
        userSignUpInteractor: UserSignUpInteractor
    }
}
export function isAppRequest(request: Request | AppRequest): request is AppRequest {
    return (request as AppRequest) !== undefined;
  }
export const middleware = (app:Application, knex: Knex) => {
    const todoListInteractor = new TodoList(knex);
    const userSignUpInteractor = new UserSignUpInteractor(knex);
app.use(function injectInteractor(req, res, next){
    if(!isAppRequest(req))
        return;
    req.interactor = {
        todoListInteractor,
        userSignUpInteractor,
    }
    next();
})
}