import {HttpError} from "routing-controllers";
export class UserNotFoundError extends HttpError {
    constructor(private debugMessage: string){
        super(404);
        Object.setPrototypeOf(this,UserNotFoundError.prototype)
    }
    toJSON(){
        return{
            status: "ERROR",
            type: "UserNotFound",
            debugMessage: this.debugMessage,
        }
    }
}