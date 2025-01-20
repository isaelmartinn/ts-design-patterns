export class MySqlDatabase {
  connectToMySql(uri: string): void {
    console.log("Connecting to MySQL:", uri);
  }

  executeMySqlQuery(query: string): void {
    console.log("Executing MySQL query:", query);
  }
}

export class PostgresSqlDatabase {
  connectToPostgres(uri: string): void {
    console.log("Connecting to PostgreSQL:", uri);
  }

  executePostgresQuery(query: string): void {
    console.log("Executing PostgreSQL query:", query);
  }
}

export class DatabaseAdapter implements MySqlDatabase {
  constructor(private postgres: PostgresSqlDatabase) {}

  connectToMySql(uri: string): void {
    this.postgres.connectToPostgres(uri);
  }

  executeMySqlQuery(query: string): void {
    this.postgres.executePostgresQuery(query);
  }
}

/// Client Code
let database = new DatabaseAdapter(new PostgresSqlDatabase());
database.connectToMySql("postgress://localhost:5432/mydb");
database.executeMySqlQuery("SELECT * FROM Users");
