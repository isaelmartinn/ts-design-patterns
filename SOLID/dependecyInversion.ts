export interface IDatabase {
  save(data: string): void;
}

class MySqlDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved my MySQL.`);
  };
}

class MongoDBDatabase implements IDatabase {
  save(data: string) {
    console.log(`${data} is being saved to MongoDB.`);
  }
}

class HighLevelModule {
  constructor(private database: IDatabase) {
  }

  execute(data: string) {
    this.database.save(data);
  }
}

const mySql = new MySqlDatabase();
const mongoDb = new MongoDBDatabase();

const user = new HighLevelModule(mySql);
user.execute("John");

const post = new HighLevelModule(mongoDb);
post.execute("New Post");
