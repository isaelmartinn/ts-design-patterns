export interface Handler {
  setNext(handler: Handler): Handler;
  handle(order: Order): string | null;
}

export abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(order: Order): string | null {
    return this.nextHandler ? this.nextHandler.handle(order) : null;
  }
}

export class Order {
  isValid(): boolean {
    return true;
  }

  applyDiscount(): void {
    console.log("Discount applied");
  }

  precessPayment(): boolean {
    return false;
  }

  shiṕ() {
    console.log("Shipping");
  }
}

export class ValidationHandler extends AbstractHandler {
  handle(order: Order): string | null {
    if (order.isValid()) {
      return super.handle(order);
    }

    return "Validation Failed";
  }
}

export class DiscountHandler extends AbstractHandler {
  handle(order: Order): string | null {
    order.applyDiscount();

    return super.handle(order);
  }
}

export class PaymentHandler extends AbstractHandler {
  handle(order: Order): string | null {
    if (order.precessPayment()) {
      return super.handle(order);
    }

    return "Payment Failed";
  }
}

export class ShippingHandler extends AbstractHandler {
  handle(order: Order): string | null {
    order.shiṕ();

    return "Order processed and shipped";
  }
}

/// Client Code

const order = new Order();
const orderHandler = new ValidationHandler();

orderHandler
  .setNext(new DiscountHandler())
  .setNext(new PaymentHandler())
  .setNext(new ShippingHandler());

console.log(orderHandler.handle(order));
