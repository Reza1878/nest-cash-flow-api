import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import 'winston-daily-rotate-file';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import InvariantError from './common/exceptions/InvariantError';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const loggerService = app.get(WINSTON_MODULE_NEST_PROVIDER);

  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
      exceptionFactory: (errors) => {
        const key = Object.keys(errors[0].constraints)[0];
        return new InvariantError(errors[0].constraints[key]);
      },
    }),
  );
  app.useLogger(loggerService);

  await app.listen(config.get('PORT'));
}
bootstrap();
