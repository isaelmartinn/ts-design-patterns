export interface PaymentStrategy {
  processPayment(amount: number): void;
}

export class PayPalStrategy implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Paid ${amount} using PayPal.`);
  }
}

export class CreditCardStrategy implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Paid ${amount} using Credit Card.`);
  }
}

export class BitcoinStrategy implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Paid ${amount} using Bitcoin.`);
  }
}

export class OnlineStore {
  constructor(private paymentStrategy: PaymentStrategy) {}

  checkout(amount: number): void {
    this.paymentStrategy.processPayment(amount);
  }
}

const payPal = new PayPalStrategy();
const storeWithPayPal = new OnlineStore(payPal);
storeWithPayPal.checkout(100);

const creditCard = new CreditCardStrategy();
const storeWithCreditCard = new OnlineStore(creditCard);
storeWithCreditCard.checkout(200);

const bitcoin = new BitcoinStrategy();
const storeWithBitcoin = new OnlineStore(bitcoin);
storeWithBitcoin.checkout(300);
