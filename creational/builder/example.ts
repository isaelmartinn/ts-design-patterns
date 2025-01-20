interface Builder {
  setPartA(): void;

  setPartB(): void;

  setPartC(): void;
}

export class Product {
  private parts: string[] = [];

  public add(part: string) {
    this.parts.push(part);
  }

  public listPart() {
    console.log(`Product Parts: ${this.parts.join(", ")}`);
  }
}


export class ConcreteBuilder implements Builder {
  private product!: Product;

  constructor() {
    this.reset();
  }


  public reset() {
    this.product = new Product();
  }

  setPartA() {
    this.product.add("Part A");
  }

  setPartB() {
    this.product.add("Part B");
  }

  setPartC() {
    this.product.add("Part C");
  }

  getProduct(): Product {
    const result = this.product;
    this.reset();

    return result;
  }
}

export class Director {
  private builder!: Builder;

  setBuilder(builder: Builder) {
    this.builder = builder;
  }

  buildMinimumProduct() {
    this.builder.setPartA();
  }

  buildFullProduct() {
    this.builder.setPartA();
    this.builder.setPartB();
    this.builder.setPartC();
  }
}

const builder = new ConcreteBuilder();
const director = new Director();

director.setBuilder(builder);

director.buildMinimumProduct();
const minProduct = builder.getProduct();
console.log(minProduct);


director.buildFullProduct();
const fullProducts = builder.getProduct();
console.log(fullProducts);
