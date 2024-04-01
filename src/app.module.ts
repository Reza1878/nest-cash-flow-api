import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './Infrastructures/database/database.module';
import { UserModule } from './Interfaces/http/user/user.module';
import { RepositoryModule } from './Infrastructures/repository/repository.module';
import { WinstonModule } from 'nest-winston';
import { format, transports } from 'winston';
import { AuthenticationModule } from './Interfaces/http/authentication/authentication.module';
import 'winston-daily-rotate-file';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    WinstonModule.forRoot({
      format: format.json(),
      transports: [
        new transports.DailyRotateFile({
          filename: 'logs/%DATE%-error.log',
          maxFiles: '14d',
          level: 'error',
        }),
        new transports.DailyRotateFile({
          filename: 'logs/%DATE%-combined.log',
          maxFiles: '14d',
        }),
      ],
    }),
    JwtModule.register({
      global: true,
    }),
    CommonModule,
    DatabaseModule,
    RepositoryModule,
    UserModule,
    AuthenticationModule,
  ],
  providers: [],
})
export class AppModule {}
