import { JwtService } from '@nestjs/jwt';
import { TokenManager } from '../../Applications/security/TokenManager';
import { ConfigService } from '@nestjs/config';
import AuthenticationError from '../../common/exceptions/AuthenticationError';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtTokenManager extends TokenManager {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {
    super();
  }

  createRefreshToken(payload: any): string {
    const token = this.jwtService.sign(payload, {
      secret: this.configService.get('REFRESH_TOKEN_KEY'),
    });

    return token;
  }

  createAccessToken(payload: any): string {
    const token = this.jwtService.sign(payload, {
      secret: this.configService.get('ACCESS_TOKEN_KEY'),
    });

    return token;
  }

  verifyRefreshToken(token: string): void {
    try {
      this.jwtService.verify(token, {
        secret: this.configService.get('REFRESH_TOKEN_KEY'),
        maxAge: this.configService.get('ACCCESS_TOKEN_AGE'),
      });
    } catch (error) {
      throw new AuthenticationError('Token is invalid');
    }
  }

  verifyAccessToken(token: string): void {
    try {
      this.jwtService.verify(token, {
        secret: this.configService.get('ACCESS_TOKEN_KEY'),
      });
    } catch (error) {
      throw new AuthenticationError('Token is invalid');
    }
  }

  decodePayload(token: string) {
    const payload = this.jwtService.verify(token, {
      secret: this.configService.get('ACCESS_TOKEN_KEY'),
    });

    return payload;
  }

  decodeRefreshToken(token: string) {
    const payload = this.jwtService.verify(token, {
      secret: this.configService.get('REFRESH_TOKEN_KEY'),
    });

    return payload;
  }
}
