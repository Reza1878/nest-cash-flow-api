import RegisterUser from './entities/RegisterUser';
import User from './entities/User';

export default abstract class UserRepository {
  abstract verifyAvailableEmail(email: string): Promise<void>;
  abstract addUser(payload: RegisterUser): Promise<number>;
  abstract getUserById(id: number): Promise<User>;
  abstract getUserByEmail(email: string): Promise<User>;
}
