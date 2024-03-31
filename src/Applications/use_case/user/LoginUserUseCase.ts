import { Injectable } from '@nestjs/common';
import PasswordHash from '../../security/PasswordHash';
import AuthRepository from '../../../Domains/auth/AuthRepository';
import UserRepository from '../../../Domains/users/UserRepository';
import LoginUser from '../../../Domains/users/entities/LoginUser';
import { TokenManager } from '../../security/TokenManager';
import NewAuth from '../../../Domains/auth/entities/NewAuth';

@Injectable()
export class LoginUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private passwordHash: PasswordHash,
    private authRepository: AuthRepository,
    private tokenManager: TokenManager,
  ) {}

  async execute(payload: LoginUser) {
    const user = await this.userRepository.getUserByEmail(payload.email);

    await this.passwordHash.comparePassword(payload.password, user.password);

    const jwtPayload = { user_id: user.id };
    const accessToken = this.tokenManager.createAccessToken(jwtPayload);
    const refreshToken = this.tokenManager.createRefreshToken(jwtPayload);

    await this.authRepository.addToken(refreshToken);

    return new NewAuth({ accessToken, refreshToken });
  }
}
