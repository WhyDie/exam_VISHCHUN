import { User } from './user';

export class MySQLDatabase {
  private data: User[] = [];

  save(user: User): void {
    console.log('[MySQLDatabase] Зберігаємо користувача у MySQL:', user);
    this.data.push(user);
  }

  getById(id: number): User | undefined {
    return this.data.find(u => u.id === id);
  }
}
