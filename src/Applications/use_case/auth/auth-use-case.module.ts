import { Module } from '@nestjs/common';
import { RefreshAccessTokenUseCase } from './RefreshAccessTokenUseCase';

@Module({
  providers: [RefreshAccessTokenUseCase],
  exports: [RefreshAccessTokenUseCase],
})
export class AuthUseCaseModule {}
