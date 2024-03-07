export interface Command {
  execute(): void;
  undo(): void;
}

export class AddCommand implements Command {
  constructor(private calculator: Calculator, private value: number) {}

  execute() {
    this.calculator.add(this.value);
  }

  undo() {
    this.calculator.subtract(this.value);
  }
}

export class SubtractCommand implements Command {
  constructor(private calculator: Calculator, private value: number) {}

  execute() {
    this.calculator.subtract(this.value);
  }

  undo() {
    this.calculator.add(this.value);
  }
}

export class Calculator {
  private value = 0;

  add(value: number): void {
    this.value += value;
  }

  subtract(value: number): void {
    this.value -= value;
  }

  getValue(): number {
    return this.value;
  }
}

const calculator = new Calculator();
const addCommand = new AddCommand(calculator, 5);
const subtractCommand = new SubtractCommand(calculator, 3);

addCommand.execute();
console.log(calculator.getValue()); // calculator value is now 5
subtractCommand.execute();
console.log(calculator.getValue()); // calculator value is now 2

subtractCommand.undo();
console.log(calculator.getValue()); // calculator value is now 5
addCommand.undo();
console.log(calculator.getValue()); // calculator value is now 0
