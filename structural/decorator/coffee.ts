export interface Coffee {
  cost(): number;
  getDescription(): string;
}

export class BasicCoffee implements Coffee {
  cost(): number {
    return 2;
  }

  getDescription(): string {
    return "Basic Coffee";
  }
}

export abstract class CoffeeDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost();
  }

  getDescription(): string {
    return this.coffee.getDescription();
  }
}

export class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return super.cost() + 1;
  }

  getDescription(): string {
    return super.getDescription() + ", Milk";
  }
}

export class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return super.cost() + 0.5;
  }

  getDescription(): string {
    return super.getDescription() + ", Sugar";
  }
}

const basicCoffee = new BasicCoffee();
const coffeeWithMilk = new MilkDecorator(basicCoffee);
const coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk);

console.log(`Order: ${coffeeWithMilkAndSugar.getDescription()}`);
console.log(`Cost: ${coffeeWithMilkAndSugar.cost()}`)