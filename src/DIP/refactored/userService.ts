import { User } from './user';
import { UserRepository } from './userRepository';

export class UserService {
  constructor(private repository: UserRepository) {}

  createUser(user: User): void {
    this.repository.save(user);
  }

  getUser(id: number): User | undefined {
    return this.repository.getById(id);
  }
}
