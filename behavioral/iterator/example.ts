export class ArrayIterator<T> {
  private position: number = 0;

  constructor(private collection: T[]) {}

  next(): T {
    const result = this.collection[this.position];
    this.position += 1;

    return result;
  }

  hasNext(): boolean {
    return this.position < this.collection.length;
  }
}

const array = [1, 2, 3, 4, 5, 6];
const iterator = new ArrayIterator(array);
console.log(iterator.hasNext());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
