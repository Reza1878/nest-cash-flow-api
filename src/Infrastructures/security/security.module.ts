import { Module } from '@nestjs/common';
import PasswordHash from 'src/Applications/security/PasswordHash';
import { BcryptPasswordHash } from './BcryptPasswordHash';

@Module({
  providers: [{ provide: PasswordHash, useClass: BcryptPasswordHash }],
  exports: [PasswordHash],
})
export class SecurityModule {}
