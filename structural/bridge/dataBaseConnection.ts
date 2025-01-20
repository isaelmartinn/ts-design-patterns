export interface Database {
  connect(): void;
  query(query: string): void;
  close(): void;
}

export class PostgreSQLDatabase implements Database {
  connect(): void {
    console.log("Connection to PostgreSQL");
  }

  query(query: string) {
    console.log(`Executing query: ${query}`);
  }

  close(): void {
    console.log("Closing connection with PostgreSQL");
  }
}

export class MongoDBDatabase implements Database {
  connect(): void {
    console.log("Connection to MongoDB");
  }

  query(query: string) {
    console.log(`Executing query: ${query}`);
  }

  close(): void {
    console.log("Closing connection with MongoDB");
  }
}

export abstract class DatabaseService {
  constructor(protected database: Database) {}

  abstract fetchData(query: string): any;
}

export class ClientDatabaseServie extends DatabaseService {
  fetchData(query: string) {
    this.database.connect();
    this.database.query(query);
    this.database.close();
  }
}

/// Client Code
const postgreSQL = new ClientDatabaseServie(new PostgreSQLDatabase());
postgreSQL.fetchData("SELECT * FROM users");
console.log("");

const mongoDB = new ClientDatabaseServie(new MongoDBDatabase());
mongoDB.fetchData("SELECT * FROM user WHERE user.id = 12");
