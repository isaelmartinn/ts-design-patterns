class Singleton {
  private static instance: Singleton;
  private static _value: number;

  private constructor() {
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  set value(value: number) {
    Singleton._value = value;
  }

  get value() {
    return Singleton._value;
  }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

instance1.value = 10;

// @ts-ignore
console.log(instance1.value);
// @ts-ignore
console.log(instance2.value);
// @ts-ignore
console.log(instance1 === instance2);

class Logger {
  private static instance: Logger;

  private constructor() {
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  public log(message: string): void {
    // @ts-ignore
    const timestamp = new Date();
    // @ts-ignore
    console.log(`[${timestamp.toLocaleString()}] - ${message}`);
  }
}

const logger1 = Logger.getInstance();
logger1.log("This is the first message");

const logger2 = Logger.getInstance();
logger2.log("This is the second message");
