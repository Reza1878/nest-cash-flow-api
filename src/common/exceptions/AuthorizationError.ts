import ClientError from './ClientError';

export default class AuthorizationError extends ClientError {
  constructor(message: string) {
    super(message);
    this.name = 'AuthorizationError';
    this.statusCode = 403;
  }
}
