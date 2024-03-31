import { Module } from '@nestjs/common';
import AddUserUseCase from './AddUserUseCase';
import { SecurityModule } from '../../../Infrastructures/security/security.module';
import { LoginUserUseCase } from './LoginUserUseCase';

@Module({
  imports: [SecurityModule],
  providers: [AddUserUseCase, LoginUserUseCase],
  exports: [AddUserUseCase, LoginUserUseCase],
})
export default class UserUseCase {}
