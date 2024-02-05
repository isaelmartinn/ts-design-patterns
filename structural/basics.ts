export class Target {
  public request(): string {
    return "Target: The default target's behavior";
  }
}

export class Adaptee {
  public specificRequest(): string {
    return ".eetpadA eht fo roivaheb laicepS";
  }
}

export class Adapter extends Target {
  private adaptee!: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split("").reverse().join("");

    return `Adapter (TRANSLATED) ${result}`;
  }
}

export function clientCode(target: Target) {
  console.log(target.request());
}

console.log("Client: I can work just fine with the Target object:");
const target = new Target();
clientCode(target);

console.log();

const adaptee = new Adaptee();
console.log(
  "Client: The Adaptee class has a weir interfance. See, I don't undestand it:"
);
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log();

console.log("Client: But I can work with it via the Adapter");
const adapter = new Adapter(adaptee);
clientCode(adapter);
