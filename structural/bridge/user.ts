export interface IUserImplementor {
  getUser(id: number): string;
  saveUser(id: number, name: string): void;
}

export class MySQLImplementor implements IUserImplementor {
  getUser(id: number): string {
    return `MySQL: User with ID ${id}`;
  }

  saveUser(id: number, name: string): void {
    console.log(`MySQL: Saving User - ID: ${id}, Name: ${name}`);
  }
}

class MongoDBImplementor implements IUserImplementor {
  getUser(id: number): string {
    return `MongoDB: User with ID ${id}`;
  }

  saveUser(id: number, name: string): void {
    console.log(`MongoDB: Saving User - ID: ${id}, Name: ${name}`);
  }
}

export interface IUserAbstraction {
  getUserInfo(id: number): string;
  saveUserInfo(id: number, name: string): void;
}

export class BasicUser implements IUserAbstraction {
  private implementor!: IUserImplementor;

  constructor(implementor: IUserImplementor) {
    this.implementor = implementor;
  }

  getUserInfo(id: number): string {
    return this.implementor.getUser(id);
  }

  saveUserInfo(id: number, name: string): void {
    this.implementor.saveUser(id, name);
  }
}

export class PremiumUser implements IUserAbstraction {
  private implementor!: IUserImplementor;

  constructor(implementor: IUserImplementor) {
    this.implementor = implementor;
  }

  getUserInfo(id: number): string {
    return `Premium ${this.implementor.getUser(id)}`;
  }

  saveUserInfo(id: number, name: string): void {
    console.log(`Premium user: Saving User - ID: ${id}, Name: ${name}`);
    this.implementor.saveUser(id, name);
  }
}

const mySQLImplementor = new MySQLImplementor();
const basicUserMySQL = new BasicUser(mySQLImplementor);

console.log(basicUserMySQL.getUserInfo(1));

basicUserMySQL.saveUserInfo(2, "Leonel Messi");

const mongoImplementor = new MongoDBImplementor();
const premiumUserMongoDB = new PremiumUser(mongoImplementor);

console.log(premiumUserMongoDB.getUserInfo(3));

premiumUserMongoDB.saveUserInfo(4, "james bond");
