import { HttpException, HttpStatus } from '@nestjs/common';

export class DuplicateEmailException extends HttpException {
  constructor() {
    super('Duplicate email please choose another email', HttpStatus.CONFLICT);
  }
}
