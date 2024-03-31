import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserUseCase } from 'src/Applications/use_case/user/LoginUserUseCase';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthenticationController {
  constructor(private loginUseCase: LoginUserUseCase) {}

  @Post('/session')
  async logIn(@Body() dto: LoginUserDto) {
    const data = await this.loginUseCase.execute(dto);

    return {
      message: 'Login success',
      data,
    };
  }
}
