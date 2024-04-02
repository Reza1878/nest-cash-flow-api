import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { LoginUserUseCase } from '../../../Applications/use_case/user/LoginUserUseCase';
import { SecurityModule } from '../../../Infrastructures/security/security.module';
import { RefreshAccessTokenUseCase } from '../../../Applications/use_case/auth/RefreshAccessTokenUseCase';
import { LogoutUserUseCase } from '../../../Applications/use_case/user/LogoutUserUseCase';

@Module({
  imports: [SecurityModule],
  providers: [LoginUserUseCase, RefreshAccessTokenUseCase, LogoutUserUseCase],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
