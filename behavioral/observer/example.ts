export interface Observer {
  update(subject: Subject): void;
}

export interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
  getState(): number;
  setState(state: number): void;
}

export class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: number = 0;

  addObserver(observer: Observer): void {
    const isExist = this.observers.includes(observer);

    if (isExist) return console.log("Observer already exists");

    this.observers.push(observer);
    console.log("Observer added Successfully");
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);

    if (index === -1) return console.log("Observer does not exist");

    this.observers.splice(index, 1);
    console.log("Observer was successfully removed");
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => observer.update(this));
  }

  getState(): number {
    return this.state;
  }

  setState(state: number): void {
    this.state = state;
    console.log("Setting state...");
    this.notifyObservers();
  }
}

export class ConcreteObserver implements Observer {
  constructor(private id: number) {}

  update(subject: Subject): void {
    console.log(`Observer ${this.id} updated, new state ${subject.getState()}`);
  }
}

/// Client Code
const subject = new ConcreteSubject();
const observer1 = new ConcreteObserver(1);
const observer2 = new ConcreteObserver(2);

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.setState(2);
