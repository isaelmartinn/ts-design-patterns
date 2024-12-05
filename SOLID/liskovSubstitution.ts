export abstract class Shape {
  abstract calculateArea(): number;
}

export class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

export class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  calculateArea(): number {
    return this.side * this.side;
  }
}

function area(shape: Shape) {
  return shape.calculateArea();
}

const rectangle = new Rectangle(10, 12);
const square = new Square(8);

area(rectangle); // 120
area(square); // 64

export abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

export class CreditCardProcessor extends PaymentProcessor {
  constructor() {
    super();
  }

  processPayment(amount: number) {
    console.log(`Processing Credit Card Payments - Amount ${amount}`);
  }
}

export class DebitCardProcessor extends PaymentProcessor {
  constructor() {
    super();
  }

  processPayment(amount: number) {
    console.log(`Processing Debit Card Payments - Amount ${amount}`);
  }
}

export class PaypalProcessor extends PaymentProcessor {
  constructor() {
    super();
  }

  processPayment(amount: number) {
    console.log(`Processing Paypal Payments - Amount ${amount}`);
  }
}

function executePayment(paymentProcessor: PaymentProcessor, amount: number) {
  paymentProcessor.processPayment(amount);
}

const creditCardProcessor = new CreditCardProcessor();
const debitCardProcessor = new DebitCardProcessor();
const paypalProcessor = new PaypalProcessor();

executePayment(creditCardProcessor, 100);
executePayment(debitCardProcessor, 50);
executePayment(paypalProcessor, 150);

