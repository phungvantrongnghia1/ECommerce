"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
let UserController = class UserController {
    async getListTodo(request, payload) {
        console.log('payload :>> ', payload);
        return await request.interactor.userSignUpInteractor.execute(payload);
    }
    async SignIn(request, response, payload) {
        console.log('payload :>> ', payload);
        const accessToken = await request.interactor.userSignInInteractor.execute(payload);
        response.setHeader("Authrization", accessToken);
        return "Login successs";
        // Check session each other request
    }
};
__decorate([
    routing_controllers_1.Post("/v1/user/signup"),
    __param(0, routing_controllers_1.Req()), __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getListTodo", null);
__decorate([
    routing_controllers_1.Post("/v1/user/signin"),
    __param(0, routing_controllers_1.Req()), __param(1, routing_controllers_1.Res()), __param(2, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "SignIn", null);
UserController = __decorate([
    routing_controllers_1.JsonController()
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map