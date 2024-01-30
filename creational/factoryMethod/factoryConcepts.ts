export interface IProduct {
  name: string;
}

export class ConcreteProduct implements IProduct {
  name = "";
}

export class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = "ConcreteProductA";
  }
}

export class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = "ConcreteProductB";
  }
}

export class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = "ConcreteProductC";
  }
}

export class CreatorFactory {
  static createObject(someProperty: string): IProduct {
    if (someProperty === "a") {
      return new ConcreteProductA();
    } else if (someProperty === "b") {
      return new ConcreteProductB();
    } else {
      return new ConcreteProductC();
    }
  }
}

const PRODUCT = CreatorFactory.createObject("b");
console.log(PRODUCT.name);
