import { User } from './user';

export interface UserRepository {
  save(user: User): void;
  getById(id: number): User | undefined;
}
