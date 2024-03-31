import { Module } from '@nestjs/common';
import PasswordHash from '../../Applications/security/PasswordHash';
import { BcryptPasswordHash } from './BcryptPasswordHash';
import { TokenManager } from '../../Applications/security/TokenManager';
import { JwtTokenManager } from './JwtTokenManager';

@Module({
  providers: [
    { provide: PasswordHash, useClass: BcryptPasswordHash },
    {
      provide: TokenManager,
      useClass: JwtTokenManager,
    },
  ],
  exports: [PasswordHash, TokenManager],
})
export class SecurityModule {}
