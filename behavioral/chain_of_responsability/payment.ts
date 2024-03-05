export interface PaymentHandler<T, D> {
  execute(req: T): D | null;
  setNextHandler<T, D>(handle: PaymentHandler<T, D>): PaymentHandler<T,D>
}

export abstract class AbstractHandler<T, D> implements PaymentHandler<T, D> {
  protected nextHandle: PaymentHandler<any, any> | null = null;

  public execute(req: T): D | null {
    return this.nextHandle ? this.nextHandle.execute(req) : null;
  }

  public setNextHandler<T, D>(handle: PaymentHandler<T, D>): PaymentHandler<T, D> {
    this.nextHandle = handle;

    return this.nextHandle;
  }
}

export class CalculateTotal extends AbstractHandler<number[], number> {
  public execute(req: number[]): number | null {
    const total = req.reduce((total, value) => total + value, 0);

    if (total === 0) {
      return 0;
    }

    if (!this.nextHandle) {
      return total;
    }

    console.log("[CalculateTotal]: Total calculated $", total);
    return this.nextHandle.execute(total);
  }
}

export class CreatePayment extends AbstractHandler<number, boolean> {
  execute(req: number): boolean | null {
    if (req > 1_000) {
      return false;
    }

    if (!this.nextHandle) {
      return true;
    }

    console.log("[CreatePayment]: Payment created:", req);
    return this.nextHandle.execute(true);
  }
}

export class SendPaymentNote extends AbstractHandler<boolean, string> {
  execute(req: boolean): string | null {
    if (!req) {
      return "Fail to process payment!!!";
    }

    if (!this.nextHandle) {
      console.log("[SendPaymentNote]: Notification send and finish step");
    }

    return this.nextHandle?.execute("payment notification");
  }
}

console.log("[Client]: started");

const itemsPrice = [100, 200, 120, 300, 10, 21, 42];

const calculation = new CalculateTotal();
const createPayment = new CreatePayment();
const senNotification = new SendPaymentNote();

calculation.setNextHandler(createPayment).setNextHandler(senNotification);

const result = calculation.execute(itemsPrice);

console.log("[Client]:", result);
