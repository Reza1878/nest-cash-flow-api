import { Injectable, NestMiddleware } from '@nestjs/common';
import { TokenManager } from '../../Applications/security/TokenManager';
import UserRepository from '../../Domains/users/UserRepository';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private tokenManager: TokenManager,
    private userRepository: UserRepository,
  ) {}

  async use(req: any, res: any, next: () => void) {
    const token = (req.headers['authorization'] as string).split(' ')[1];

    if (token) {
      const { user_id } = this.tokenManager.decodePayload(token);
      const user = await this.userRepository.getUserById(user_id);

      if (user) {
        req.user = user;
      }
    }

    next();
  }
}
