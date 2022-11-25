import {
  MaxLength,
  IsNotEmpty,
  IsEmail,
  IsString,
  Matches,
} from 'class-validator';

export class RegisterUserDto {
  readonly id: number;

  @IsString()
  @MaxLength(30)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(60)
  password: string;

}
