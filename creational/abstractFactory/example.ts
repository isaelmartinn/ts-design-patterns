interface IProductA {
  operationA(): string;
}

interface IProductB {
  operationB(): string;

  combinedOperation(collaborator: IProductA): string;
}

interface IFactory {
  createProductA(): IProductA;

  createProductB(): IProductB;
}

export class ProductA implements IProductA {
  operationA(): string {
    return "This is the result of Operation A";
  }
}

export class ProductB implements IProductB {
  operationB(): string {
    return "This is the result of Operation B";
  }

  combinedOperation(collaborator: IProductA): string {
    const result = collaborator.operationA();

    return `The result of Product B collaborating with: ${result}`;
  }
}

export class Factory implements IFactory {
  createProductA(): IProductA {
    return new ProductA();
  }

  createProductB(): IProductB {
    return new ProductB();
  }
}

const factory = new Factory();

const productA = factory.createProductA();
console.log(productA.operationA());

const productB = factory.createProductB();
console.log(productB.combinedOperation(productA));
console.log(productB.operationB());