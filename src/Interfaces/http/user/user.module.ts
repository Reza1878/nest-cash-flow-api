import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import AddUserUseCase from '../../../Applications/use_case/user/AddUserUseCase';
import { SecurityModule } from '../../../Infrastructures/security/security.module';
import { GetUserByIdUseCase } from '../../../Applications/use_case/user/GetUserByIdUseCase';

@Module({
  imports: [SecurityModule],
  controllers: [UserController],
  providers: [AddUserUseCase, GetUserByIdUseCase],
})
export class UserModule {}
