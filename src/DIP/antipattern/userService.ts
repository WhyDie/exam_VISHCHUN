import { User } from './user';
import { MySQLDatabase } from './mysqlDatabase';

export class UserService {
  constructor(private db: MySQLDatabase) {}

  createUser(user: User): void {
    this.db.save(user);
  }

  getUser(id: number): User | undefined {
    return this.db.getById(id);
  }
}
