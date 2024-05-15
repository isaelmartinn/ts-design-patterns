export class Context {
  constructor(private strategy: Strategy) {}

  public setStatregy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(): void {
    console.log(
      "Context: Sorting data using the strategy (not sure how it'll do it.)"
    );

    const result = this.strategy.doAlgoritm(["a", "b", "c", "d", "e"]);
  }
}

export interface Strategy {
  doAlgoritm(data: string[]): string[];
}

export class ConcreteStrategyA implements Strategy {
  public doAlgoritm(data: string[]): string[] {
    return data.sort();
  }
}

export class ConcreteStrategyB implements Strategy {
  public doAlgoritm(data: string[]): string[] {
    return data.reverse();
  }
}

const context = new Context(new ConcreteStrategyA());
console.log("Client: Strategy is set to reverse sorting");
context.doSomeBusinessLogic();

console.log();

console.log("Client: Strategy is set to reverse sorting");
context.setStatregy(new ConcreteStrategyB());
context.doSomeBusinessLogic();
