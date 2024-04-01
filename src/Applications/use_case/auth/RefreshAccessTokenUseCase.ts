import { Injectable } from '@nestjs/common';
import { TokenManager } from '../../../Applications/security/TokenManager';
import AuthRepository from '../../../Domains/auth/AuthRepository';

@Injectable()
export class RefreshAccessTokenUseCase {
  constructor(
    private authRepository: AuthRepository,
    private tokenManager: TokenManager,
  ) {}

  async execute(refreshToken: string) {
    this.tokenManager.verifyRefreshToken(refreshToken);
    await this.authRepository.checkAvailabilityToken(refreshToken);

    const payload = this.tokenManager.decodeRefreshToken(refreshToken);

    const accessToken = this.tokenManager.createAccessToken({
      user_id: payload.user_id,
    });

    return accessToken;
  }
}
