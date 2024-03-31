import { Injectable } from '@nestjs/common';
import UserRepository from '../../../Domains/users/UserRepository';
import PasswordHash from '../../../Applications/security/PasswordHash';
import RegisterUser from '../../../Domains/users/entities/RegisterUser';

@Injectable()
export default class AddUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private passwordHash: PasswordHash,
  ) {}

  async execute(payload: RegisterUser) {
    await this.userRepository.verifyAvailableEmail(payload.email);
    payload.password = await this.passwordHash.hash(payload.password);

    return this.userRepository.addUser(payload);
  }
}
