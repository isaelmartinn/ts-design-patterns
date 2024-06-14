export interface Component {
  accept(visitor: Visitor): void;
}

export class ConcreteComponentA implements Component {
  public accept(visitor: Visitor): void {
    visitor.visitConcreteComponentA(this);
  }

  public exclusiveMethodOfConcreteComponentA(): string {
    return "A";
  }
}

export class ConcreteComponentB implements Component {
  public accept(visitor: Visitor): void {
    visitor.visitConcreteComponentB(this);
  }

  public specialMethodOfConcreteComponentB(): string {
    return "B";
  }
}

export interface Visitor {
  visitConcreteComponentA(element: ConcreteComponentA): void;
  visitConcreteComponentB(element: ConcreteComponentB): void;
}

export class ConcreteVisitor1 implements Visitor {
  public visitConcreteComponentA(element: ConcreteComponentA): void {
    console.log(
      `${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`
    );
  }

  public visitConcreteComponentB(element: ConcreteComponentB): void {
    console.log(
      `${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor1`
    );
  }
}

export class ConcreteVisitor2 implements Visitor {
  public visitConcreteComponentA(element: ConcreteComponentA): void {
    console.log(
      `${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor2`
    );
  }

  public visitConcreteComponentB(element: ConcreteComponentB): void {
    console.log(
      `${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor2`
    );
  }
}

function clientCode(components: Component[], visitor: Visitor) {
  for (const component of components) {
    component.accept(visitor);
  }
}

const components = [new ConcreteComponentA(), new ConcreteComponentB()];

console.log(
  "The client code works with all visitors via the base Visitor interface"
);
const visitor1 = new ConcreteVisitor1();
clientCode(components, visitor1);
console.log("");

console.log(
  "It allows the same client code to work with different types of visitors"
);
const visitor2 = new ConcreteVisitor2();
clientCode(components, visitor2);
