import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './Infrastructures/database/database.module';
import { UserModule } from './user/user.module';
import { RepositoryModule } from './Infrastructures/repository/repository.module';

@Module({
  imports: [CommonModule, DatabaseModule, RepositoryModule, UserModule],
  providers: [],
})
export class AppModule {}
