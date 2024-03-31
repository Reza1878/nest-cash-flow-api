import { Injectable } from '@nestjs/common';
import AuthRepository from '../../Domains/auth/AuthRepository';
import AuthToken from '../../Domains/auth/entities/AuthToken';
import { PrismaService } from '../database/prisma/prisma.service';
import NotFoundError from '../../common/exceptions/NotFoundError';

@Injectable()
export class AuthRepositoryPrisma extends AuthRepository {
  constructor(private prismaService: PrismaService) {
    super();
  }

  async addToken(token: string): Promise<void> {
    await this.prismaService.authentication.create({ data: { token } });
  }

  async checkAvailabilityToken(token: string): Promise<void> {
    const curr = await this.prismaService.authentication.findFirst({
      where: {
        token,
      },
    });

    if (!curr) throw new NotFoundError('Refresh token not found');
  }

  async deleteToken(token: string): Promise<void> {
    await this.prismaService.authentication.delete({
      where: { id: undefined, token },
    });
  }

  async deleteTokenById(id: number): Promise<void> {
    await this.prismaService.authentication.delete({
      where: { id },
    });
  }

  async getToken(token: string): Promise<AuthToken> {
    const curr = await this.prismaService.authentication.findFirst({
      where: { token },
    });

    return new AuthToken(curr);
  }
}
