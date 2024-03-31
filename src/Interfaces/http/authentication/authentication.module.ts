import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { LoginUserUseCase } from '../../../Applications/use_case/user/LoginUserUseCase';
import { SecurityModule } from '../../../Infrastructures/security/security.module';

@Module({
  imports: [SecurityModule],
  providers: [LoginUserUseCase],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
