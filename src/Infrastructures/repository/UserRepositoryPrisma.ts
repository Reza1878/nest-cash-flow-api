import { Injectable } from '@nestjs/common';
import UserRepository from '../../Domains/users/UserRepository';
import RegisterUser from '../../Domains/users/entities/RegisterUser';
import User from '../../Domains/users/entities/User';
import { PrismaService } from '../database/prisma/prisma.service';
import InvariantError from '../../common/exceptions/InvariantError';
import NotFoundError from '../../common/exceptions/NotFoundError';

@Injectable()
export class UserRepositoryPrisma extends UserRepository {
  constructor(private prismaService: PrismaService) {
    super();
  }

  async verifyAvailableEmail(email: string): Promise<void> {
    const user = await this.prismaService.user.findFirst({ where: { email } });
    if (user) throw new InvariantError('Email has been taken');
  }

  async addUser(payload: RegisterUser): Promise<number> {
    const { id } = await this.prismaService.user.create({
      data: {
        email: payload.email,
        fullName: payload.fullName,
        password: payload.password,
      },
    });

    return id;
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.prismaService.user.findFirst({ where: { id } });
    if (!user) throw new NotFoundError('User not found');

    return new User(user);
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.prismaService.user.findFirst({ where: { email } });
    if (!user) throw new NotFoundError('User not found');

    return new User(user);
  }
}
