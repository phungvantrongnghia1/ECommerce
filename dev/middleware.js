"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = exports.isAppRequest = void 0;
const todointeractor_1 = require("./src/Interactor/todo/todointeractor");
const UserSignUpInteractor_1 = require("./src/Interactor/User/SignUp/UserSignUpInteractor");
const UserSignInInteractor_1 = require("./src/Interactor/User/SignIn/UserSignInInteractor");
function isAppRequest(request) {
    return request !== undefined;
}
exports.isAppRequest = isAppRequest;
const middleware = (app, knex) => {
    const todoListInteractor = new todointeractor_1.TodoList(knex);
    const userSignUpInteractor = new UserSignUpInteractor_1.UserSignUpInteractor(knex);
    const userSignInInteractor = new UserSignInInteractor_1.UserSignInInteractor(knex);
    app.use(function injectInteractor(req, res, next) {
        if (!isAppRequest(req))
            return;
        req.interactor = {
            todoListInteractor,
            userSignUpInteractor,
            userSignInInteractor,
        };
        next();
    });
};
exports.middleware = middleware;
//# sourceMappingURL=middleware.js.map