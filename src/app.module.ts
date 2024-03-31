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
import { ConfigModule, ConfigService } from '@nestjs/config';

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
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      global: true,
      useFactory: async (configService: ConfigService) => {
        return {
          signOptions: {
            expiresIn: configService.get('ACCCESS_TOKEN_AGE'),
          },
        };
      },
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
