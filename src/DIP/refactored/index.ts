import { User } from './user';
import { MySQLUserRepository } from './mysqlUserRepository';
import { FileUserRepository } from './fileUserRepository';
import { UserService } from './userService';

// Виправлений DIP: високорівневі модулі та низькорівневі модулі залежать від абстракцій

const mysqlRepo = new MySQLUserRepository();
const userService = new UserService(mysqlRepo);
userService.createUser({ id: 1, name: 'Oksana' });
console.log('[Refactored] Fetched from MySQL:', userService.getUser(1));

const fileRepo = new FileUserRepository();
const userService2 = new UserService(fileRepo);
userService2.createUser({ id: 2, name: 'Maks' });
console.log('[Refactored] Fetched from FileRepo:', userService2.getUser(2));

export {};

