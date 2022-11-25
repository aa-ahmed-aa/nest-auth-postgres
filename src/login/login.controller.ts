import { Controller, Post, Body, Get, Res, Req, UseGuards, HttpStatus } from "@nestjs/common";
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('auth')
@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  public async login(@Body() loginDto: LoginDto): Promise<any> {
    return await this.loginService.login(loginDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  public async profile(@Res() res, @Req() req): Promise<any> {
    return res.status(HttpStatus.OK).send(`Welcome ${req.user.name}!`);
  }
}
