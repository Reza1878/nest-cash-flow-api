import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import AddUserUseCase from '../../../Applications/use_case/user/AddUserUseCase';
import { SecurityModule } from '../../../Infrastructures/security/security.module';

@Module({
  imports: [SecurityModule],
  controllers: [UserController],
  providers: [AddUserUseCase],
})
export class UserModule {}
