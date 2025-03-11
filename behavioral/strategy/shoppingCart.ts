export interface PaymentStrategy {
  pay(amount: number): void;
}

export class PaypalStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal`);
  }
}

export class CreditCardStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using credit card`);
  }
}

export class BitcoinStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Bitcoin`);
  }
}

export class ShoppingCart {
  private amount: number = 0;

  constructor(private strategy: PaymentStrategy) {}

  setPaymentStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  addToCart(value: number) {
    this.amount += value;
  }

  chekout() {
    this.strategy.pay(this.amount);
    this.amount = 0;
  }
}

/// Client Code
const shoppingCart = new ShoppingCart(new PaypalStrategy());
shoppingCart.addToCart(100);
shoppingCart.addToCart(50);
shoppingCart.chekout();

shoppingCart.addToCart(100);
shoppingCart.addToCart(500);
shoppingCart.setPaymentStrategy(new CreditCardStrategy());
shoppingCart.chekout();
