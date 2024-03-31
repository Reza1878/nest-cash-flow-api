import { Module } from '@nestjs/common';
import AddUserUseCase from './AddUserUseCase';

@Module({
  providers: [AddUserUseCase],
  exports: [AddUserUseCase],
})
export default class UserUseCase {}
