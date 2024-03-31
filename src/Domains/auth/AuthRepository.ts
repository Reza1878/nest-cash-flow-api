import AuthToken from './entities/AuthToken';

export default abstract class AuthRepository {
  abstract addToken(token: string): Promise<void>;
  abstract checkAvailabilityToken(token: string): Promise<void>;
  abstract deleteToken(token: string): Promise<void>;
  abstract deleteTokenById(id: number): Promise<void>;
  abstract getToken(token: string): Promise<AuthToken>;
}
