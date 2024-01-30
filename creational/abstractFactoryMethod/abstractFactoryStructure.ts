export interface AbstractProductA {
  usefulfunctionA(): string;
}

export interface AbstractProductB {
  usefulfunctionB(): string;
}

export class ConcreteProductA1 implements AbstractProductA {
  public usefulfunctionA(): string {
    return "The result of the product A1";
  }
}

export class ConcreteProductA2 implements AbstractProductA {
  public usefulfunctionA(): string {
    return "The result of the product A2";
  }
}

export class ConcreteProductB1 implements AbstractProductB {
  public usefulfunctionB(): string {
    return "The result of the product B1";
  }
}

export class ConcreteProductB2 implements AbstractProductB {
  public usefulfunctionB(): string {
    return "The result of the product B2";
  }
}

export interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

export class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

export class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

export function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productA.usefulfunctionA());
  console.log(productB.usefulfunctionB());
}

console.log("Client: Testing clien code with ConcreteFactory1");
clientCode(new ConcreteFactory1());

console.log("----------------------------");

console.log("Client: Testing clien code with ConcreteFactory2");
clientCode(new ConcreteFactory2());
