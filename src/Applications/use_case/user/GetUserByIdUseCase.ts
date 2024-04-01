import { Injectable } from '@nestjs/common';
import UserRepository from '../../../Domains/users/UserRepository';

@Injectable()
export class GetUserByIdUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: number) {
    return this.userRepository.getUserById(id);
  }
}
