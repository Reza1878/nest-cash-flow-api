import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { LoginUserUseCase } from '../../../Applications/use_case/user/LoginUserUseCase';
import { SecurityModule } from '../../../Infrastructures/security/security.module';
import { RefreshAccessTokenUseCase } from '../../../Applications/use_case/auth/RefreshAccessTokenUseCase';

@Module({
  imports: [SecurityModule],
  providers: [LoginUserUseCase, RefreshAccessTokenUseCase],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
