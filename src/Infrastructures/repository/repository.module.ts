import { Global, Module } from '@nestjs/common';
import UserRepository from '../../Domains/users/UserRepository';
import { UserRepositoryPrisma } from './UserRepositoryPrisma';
import AuthRepository from '../../Domains/auth/AuthRepository';
import { AuthRepositoryPrisma } from './AuthRepositoryPrisma';

@Global()
@Module({
  providers: [
    { provide: UserRepository, useClass: UserRepositoryPrisma },
    { provide: AuthRepository, useClass: AuthRepositoryPrisma },
  ],
  exports: [UserRepository, AuthRepository],
})
export class RepositoryModule {}
