import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { DuplicateEmailException } from '../exceptions/duplicate-email';

@ApiTags('auth')
@Controller('')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('/user')
  public async register(
    @Res() res,
    @Body() registerUserDto: RegisterUserDto,
  ): Promise<any> {
    try {
      await this.registerService.register(registerUserDto);
    } catch (error) {
      if (error?.response?.driverError?.constraint.startsWith('UQ_')) {
        throw new DuplicateEmailException();
      }
    }

    return res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      response: 'Successfully registered new user!',
    });
  }
}
