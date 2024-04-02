import { IsNotEmpty, IsString } from 'class-validator';

export class LogoutUserDto {
  @IsNotEmpty()
  @IsString()
  refreshToken: string;
}
