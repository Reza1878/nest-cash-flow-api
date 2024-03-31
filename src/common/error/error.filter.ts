import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import ClientError from '../exceptions/ClientError';

@Catch(Error, HttpException)
export class ErrorFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();

    if (exception instanceof ClientError) {
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
      response.status(500).json({
        errors: err.message,
      });
    }
  }
}
