import { Controller, Get, Req } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';
import { BaseResponse } from 'src/base/base.response';

@Controller('users')
export class UsersController extends BaseController {
    @Get('')
    getUser(@Req() req: any) {
        try {
            return this.createSuccessResponse(new BaseResponse({}, 's', true), req);

        } catch (ex) {
            return this.createErrorResponse({ message: ex.message, statusCode: ex.status }, req)
        }
    }
}
