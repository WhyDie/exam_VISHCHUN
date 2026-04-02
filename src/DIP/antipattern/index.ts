import { User } from './user';
import { MySQLDatabase } from './mysqlDatabase';
import { UserService } from './userService';

// Антипатерн DIP: високорівневий модуль залежить від низькорівневого

const sqlDb = new MySQLDatabase();
const service = new UserService(sqlDb);
service.createUser({ id: 1, name: 'Ivan' });

const foundUser: User | undefined = service.getUser(1);
console.log('[Antipattern] знайдений користувач:', foundUser);

