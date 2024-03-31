import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Inject,
} from '@nestjs/common';
import ClientError from '../exceptions/ClientError';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Catch(Error, HttpException)
export class ErrorFilter<T> implements ExceptionFilter {
  constructor(@Inject(WINSTON_MODULE_PROVIDER) private logService: Logger) {}

  catch(exception: T, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const request = host.switchToHttp().getRequest();

    let message = '';
    if (exception instanceof ClientError) {
      message = exception.message;
      response.status(exception.statusCode).json({
        message: exception.message,
        data: null,
      });
    } else if (exception instanceof HttpException) {
      response.status(exception.getStatus()).json({
        message: exception.getResponse(),
      });
    } else {
      const err = exception as Error;
      message = err.message;

      response.status(500).json({
        errors: err.message,
      });
    }

    if (!['/user'].includes(request.route.path)) {
      this.logService.error(message, { payload: request.body });
    }
  }
}
