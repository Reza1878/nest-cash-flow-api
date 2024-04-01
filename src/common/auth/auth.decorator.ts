import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import AuthorizationError from '../exceptions/AuthorizationError';

export const Auth = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();

    const { user } = req;

    if (!user) throw new AuthorizationError('Unauthorized');

    return user;
  },
);
