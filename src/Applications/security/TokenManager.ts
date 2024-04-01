export abstract class TokenManager {
  abstract createRefreshToken(payload: any): string;
  abstract createAccessToken(payload: any): string;
  abstract verifyRefreshToken(token: string): void;
  abstract verifyAccessToken(token: string): void;
  abstract decodePayload(token: string): any;
  abstract decodeRefreshToken(token: string): any;
}
