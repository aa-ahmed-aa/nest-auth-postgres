import {
  Controller,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@UseGuards(AuthGuard('jwt'))
@Controller('')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


}
