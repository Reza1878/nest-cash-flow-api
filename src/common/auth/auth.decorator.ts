import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import AuthenticationError from '../exceptions/AuthenticationError';

export const Auth = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();

    const { user } = req;

    if (!user) throw new AuthenticationError('Unauthorized');

    return user;
  },
);
