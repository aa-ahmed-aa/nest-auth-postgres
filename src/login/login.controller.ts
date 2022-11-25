import { Controller, Post, Body, Get, Res, Req } from "@nestjs/common";
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  public async login(@Body() loginDto: LoginDto): Promise<any> {
    return await this.loginService.login(loginDto);
  }

  @Get('/auth/me')
  public async profile(@Res() response, @Req() request): Promise<any> {
    return request.headers;
  }
}
