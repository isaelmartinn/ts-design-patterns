export interface Payment {
  creditCard: number;
}

export abstract class PaymentGateway {
  public abstract createPayment(creditCard: number, ...args: any[]): Payment;

  public completePayment(payment: Payment): void {
    console.log(
      `Payment with credit card ${payment.creditCard} successfully completed using the PaymentGateway`
    );
  }
}

export interface PhysicalPayment extends Payment {
  storeLocation: string;
}

export interface OnlinePayment extends Payment {
  email: string;
}

export class PhysicalPaymentGateway extends PaymentGateway {
  public createPayment(
    creditCard: number,
    storeLocation: string
  ): PhysicalPayment {
    return { creditCard, storeLocation };
  }
}

export class OnlinePaymentGateway extends PaymentGateway {
  public createPayment(creditCard: number, email: string): OnlinePayment {
    return { creditCard, email };
  }
}

const onlinePaymentGateway = new OnlinePaymentGateway();
const onlinePayment = onlinePaymentGateway.createPayment(
  987654321,
  "test@example.com"
);
onlinePaymentGateway.completePayment(onlinePayment);

const physicalPaymentGateway = new PhysicalPaymentGateway();
const physicalPayment = physicalPaymentGateway.createPayment(
  123456789,
  "New York"
);
physicalPaymentGateway.completePayment(physicalPayment);
