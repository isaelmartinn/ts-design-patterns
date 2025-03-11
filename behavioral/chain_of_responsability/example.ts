export interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}

export abstract class AbstractHanlder implements Handler {
  private nextHandler: Handler | null = null;

  handle(request: string): string | null {
    return this.nextHandler ? this.nextHandler.handle(request) : null;
  }

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;

    return handler;
  }
}

export class MonkeyHandler extends AbstractHanlder {
  handle(request: string): string | null {
    if (request === "Banana") {
      return `Monkey: I'll eat the ${request}`;
    }

    return super.handle(request);
  }
}

export class SquirellHandler extends AbstractHanlder {
  handle(request: string): string | null {
    if (request === "Nut") {
      return `Squirrel: I'll eat the ${request}`;
    }

    return super.handle(request);
  }
}

export class DogHandler extends AbstractHanlder {
  handle(request: string): string | null {
    if (request === "Meatball") {
      return `Dog: I'll eat the ${request}`;
    }

    return super.handle(request);
  }
}

/// Client Code
function clientCode(handle: Handler) {
  const foods = ["Nut", "Banana", "Cup Of Coffee", "Meatball"];

  for (const food of foods) {
    console.log(`Who wants to eat ${food}`);
    const result = handle.handle(food);

    if (result) {
      console.log(result);
    } else {
      console.log(`${food} was left untouched`);
    }
  }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirellHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);
clientCode(monkey);
