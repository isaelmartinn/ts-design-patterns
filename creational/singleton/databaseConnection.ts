export class DatabaseConnection {
  private static instance: DatabaseConnection;

  private constructor() {}

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }

    return DatabaseConnection.instance;
  }

  public query(sql: string): void {
    console.log(`Executing query: ${sql}`);
  }
}

const dbConnection1 = DatabaseConnection.getInstance();
dbConnection1.query("SELCT * FROM users");

const dbConnection2 = DatabaseConnection.getInstance();
dbConnection2.query("UPDATE users SET name = John");

console.log(dbConnection1 === dbConnection2);
