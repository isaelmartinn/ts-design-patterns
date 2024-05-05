export interface Observer {
  update(subject: Subject): void;
}

export interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

export class Customer implements Observer {
  constructor(private name: string) {}

  update(subject: Subject): void {
    console.log(`${this.name}, the product you want is back in stock.`);
  }
}

export class Product implements Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const removeIndex = this.observers.findIndex((obs) => observer === obs);

    if (removeIndex !== -1) {
      this.observers.splice(removeIndex, 1);
    }
  }

  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this);
    }
  }

  restock(): void {
    this.notifyObservers();
  }
}

const product = new Product();

const john = new Customer("John");
const jane = new Customer("Jane");

product.addObserver(john);
product.addObserver(jane);

product.restock();
