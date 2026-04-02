import { User } from './user';
import { UserRepository } from './userRepository';

export class FileUserRepository implements UserRepository {
  private data: User[] = [];

  save(user: User): void {
    console.log('[FileRepo] Save user:', user);
    this.data.push(user);
  }

  getById(id: number): User | undefined {
    return this.data.find(u => u.id === id);
  }
}
