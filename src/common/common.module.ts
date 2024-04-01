import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ErrorFilter } from './error/error.filter';
import { ConfigModule } from '@nestjs/config';
import { AuthMiddleware } from './auth/auth.middleware';
import { SecurityModule } from '../Infrastructures/security/security.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), SecurityModule],
  providers: [{ provide: APP_FILTER, useClass: ErrorFilter }],
})
export class CommonModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
