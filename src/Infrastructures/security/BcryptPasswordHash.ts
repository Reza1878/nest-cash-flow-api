import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import PasswordHash from '../../Applications/security/PasswordHash';
import InvariantError from '../../common/exceptions/InvariantError';

@Injectable()
export class BcryptPasswordHash extends PasswordHash {
  readonly saltOrRounds: number = 10;

  hash(password: string): Promise<string> {
    return hash(password, this.saltOrRounds);
  }

  async comparePassword(plain: string, encrypted: string): Promise<void> {
    const result = await compare(plain, encrypted);
    if (!result) throw new InvariantError('Password not match');
  }
}
