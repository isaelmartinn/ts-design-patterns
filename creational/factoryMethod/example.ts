export abstract class Car {
  constructor(
    public model: string,
    public production: number,
  ) {
  }

  abstract displayCarInfo(): void;
}

export class Sedan extends Car {
  displayCarInfo() {
    console.log(`This is a Sedan. Model: ${this.model}, Production Year: ${this.production}`);
  }
}

export class SUV extends Car {
  displayCarInfo() {
    console.log(`This is a SUV. Model: ${this.model}, Production Year: ${this.production}`);
  }
}

export class Hatchback extends Car {
  displayCarInfo() {
    console.log(`This is a Hatchback. Model: ${this.model}, Production Year: ${this.production}`);
  }
}

export class CarFactory {
  public createCar(
    type: "sedan" | "suv" | "hatchback",
    model: string,
    productionYear: number,
  ): Car {
    switch (type) {
      case "sedan":
        return new Sedan(model, productionYear);
      case "suv":
        return new SUV(model, productionYear);
      case "hatchback":
        return new Hatchback(model, productionYear);
      default:
        throw new Error("Invalid car type");
    }
  }
}

const carFactory = new CarFactory();
const sedan = carFactory.createCar("sedan", "Camry", 2023);
sedan.displayCarInfo();

const suv = carFactory.createCar("suv", "RAV4", 2023);
suv.displayCarInfo();

const hatchback = carFactory.createCar("hatchback", "Corolla", 2023);
hatchback.displayCarInfo();

export abstract class PaymentProcessor {
  constructor(
    public amount: number,
  ) {
  }

  abstract processPayment(): void;
}

export class PaypalProcessor extends PaymentProcessor {
  processPayment() {
    console.log(`Using Paypal to pay. Amount: ${this.amount}`);
  }
}

export class StripeProcessor extends PaymentProcessor {
  processPayment() {
    console.log(`Using Stripe to pay. Amount: ${this.amount}`);
  }
}

export class BankTransferProcessor extends PaymentProcessor {
  processPayment() {
    console.log(`Using Bank Transfer to pay. Amount: ${this.amount}`);
  }
}

export class PaymentProcessorFactory {
  createProcessor(
    type: "paypal" | "stripe" | "bankTransfer",
    amount: number,
  ): PaymentProcessor {
    switch (type) {
      case "paypal":
        return new PaypalProcessor(amount);
      case "stripe":
        return new StripeProcessor(amount);
      case "bankTransfer":
        return new BankTransferProcessor(amount);
    }
  }
}

const paymentProcessorFactory = new PaymentProcessorFactory();

const paypal = paymentProcessorFactory.createProcessor("paypal", 100);
paypal.processPayment();

const stripe = paymentProcessorFactory.createProcessor("stripe", 100);
stripe.processPayment();

const bankTransfer = paymentProcessorFactory.createProcessor("bankTransfer", 100);
bankTransfer.processPayment();
