import { HttpStatus } from "@nestjs/common";
import { BaseResponse } from "./base.response";

export abstract class BaseController {
    private readonly controllerName: string
    constructor(controllerName: string) {
        this.controllerName = controllerName;
    }
    protected createSuccessResponse(data: { data: any, message: string, success: boolean }, req: Request) {
        console.log(this.controllerName + req.url + req.method + req.body)
        return data;
    }

    protected createErrorResponse(error: { message: string, statusCode: HttpStatus }, req: any) {
        console.log(this.controllerName + req.url + req.method + req.body + error.message)
        return new BaseResponse(null, error.message, false)
    }
}