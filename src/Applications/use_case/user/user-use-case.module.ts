import { Module } from '@nestjs/common';
import AddUserUseCase from './AddUserUseCase';
import { SecurityModule } from '../../../Infrastructures/security/security.module';
import { LoginUserUseCase } from './LoginUserUseCase';
import { GetUserByIdUseCase } from './GetUserByIdUseCase';
import { LogoutUserUseCase } from './LogoutUserUseCase';

@Module({
  imports: [SecurityModule],
  providers: [
    AddUserUseCase,
    LoginUserUseCase,
    GetUserByIdUseCase,
    LogoutUserUseCase,
  ],
  exports: [
    AddUserUseCase,
    LoginUserUseCase,
    GetUserByIdUseCase,
    LogoutUserUseCase,
  ],
})
export default class UserUseCase {}
