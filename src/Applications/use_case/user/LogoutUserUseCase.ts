import { Injectable } from '@nestjs/common';
import { TokenManager } from '../../../Applications/security/TokenManager';
import AuthRepository from '../../../Domains/auth/AuthRepository';
import LogoutAuth from '../../../Domains/auth/entities/LogoutAuth';

@Injectable()
export class LogoutUserUseCase {
  constructor(
    private tokenManager: TokenManager,
    private authRepository: AuthRepository,
  ) {}

  async execute(payload: LogoutAuth) {
    this.tokenManager.verifyRefreshToken(payload.refreshToken);
    await this.authRepository.checkAvailabilityToken(payload.refreshToken);

    const curr = await this.authRepository.getToken(payload.refreshToken);
    this.authRepository.deleteTokenById(curr.id);
  }
}
