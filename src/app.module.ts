import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './Infrastructures/database/database.module';
import { UserModule } from './user/user.module';
import { RepositoryModule } from './Infrastructures/repository/repository.module';
import { WinstonModule } from 'nest-winston';
import { format, transports } from 'winston';
import 'winston-daily-rotate-file';

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
    CommonModule,
    DatabaseModule,
    RepositoryModule,
    UserModule,
  ],
  providers: [],
})
export class AppModule {}
