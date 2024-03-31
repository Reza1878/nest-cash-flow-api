import ClientError from './ClientError';

export default class AuthenticationError extends ClientError {
  constructor(message: string) {
    super(message);
    this.name = 'AuthenticationError';
    this.statusCode = 401;
  }
}
