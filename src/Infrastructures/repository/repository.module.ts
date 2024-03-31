import { Global, Module } from '@nestjs/common';
import UserRepository from '../../Domains/users/UserRepository';
import { UserRepositoryPrisma } from './UserRepositoryPrisma';

@Global()
@Module({
  providers: [{ provide: UserRepository, useClass: UserRepositoryPrisma }],
  exports: [UserRepository],
})
export class RepositoryModule {}
