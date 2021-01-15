import { HttpError } from "routing-controllers";
export class InvalidCedentialsError extends HttpError {
    constructor(){
        super(401);
        Object.setPrototypeOf(this, InvalidCedentialsError.prototype);
    }
    toJSON(){
        return {
            type: "InvalidCredentials",
            options: {},
            status: "ERROR",
          };
    }
}