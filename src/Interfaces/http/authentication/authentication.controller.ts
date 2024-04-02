import { Body, Controller, Delete, Post } from '@nestjs/common';
import { LoginUserUseCase } from '../../../Applications/use_case/user/LoginUserUseCase';
import { LoginUserDto } from './dto/login-user.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { RefreshAccessTokenUseCase } from '../../../Applications/use_case/auth/RefreshAccessTokenUseCase';
import { LogoutUserUseCase } from '../../../Applications/use_case/user/LogoutUserUseCase';
import { LogoutUserDto } from './dto/logout-user.dto';

@Controller('auth')
export class AuthenticationController {
  constructor(
    private loginUseCase: LoginUserUseCase,
    private refreshTokenUseCase: RefreshAccessTokenUseCase,
    private logoutUserUseCase: LogoutUserUseCase,
  ) {}

  @Post('/session')
  async logIn(@Body() dto: LoginUserDto) {
    const data = await this.loginUseCase.execute(dto);

    return {
      message: 'Login success',
      data,
    };
  }

  @Post('/session/refresh')
  async refreshToken(@Body() dto: RefreshTokenDto) {
    const accessToken = await this.refreshTokenUseCase.execute(
      dto.refreshToken,
    );

    return {
      message: 'Token refreshed successfully!',
      data: { accessToken },
    };
  }

  @Delete('/session')
  async logout(@Body() dto: LogoutUserDto) {
    await this.logoutUserUseCase.execute(dto);

    return {
      message: 'Logout success',
    };
  }
}
