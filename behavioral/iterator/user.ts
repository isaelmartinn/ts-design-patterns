export class User {
  constructor(public name: string) {}
}

export interface MyIteratorResult<T> {
  value: T | null;
  done: boolean;
}

export interface MyIterator<T> {
  next(): MyIteratorResult<T>;
  hasNext(): boolean;
}

export interface Collection<T> {
  createIterator(): MyIterator<T>;
}

export class UserCollection implements Collection<User> {
  constructor(private users: User[]) {}

  createIterator(): MyIterator<User> {
    return new UserIterator(this);
  }

  getItems() {
    return this.users;
  }
}

export class UserIterator implements MyIterator<User> {
  private position: number = 0;

  constructor(private collection: UserCollection) {}

  hasNext(): boolean {
    return this.position < this.collection.getItems().length;
  }

  next(): MyIteratorResult<User> {
    return this.hasNext()
      ? {
          value: this.collection.getItems()[this.position++],
          done: false,
        }
      : {
          value: null,
          done: true,
        };
  }
}

/// Client Code

const users = [new User("Alex"), new User("Alice"), new User("Bob")];

// Convert Array of Users into a collection
const userCollection = new UserCollection(users);

// Create an iterator
const iterator = userCollection.createIterator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
