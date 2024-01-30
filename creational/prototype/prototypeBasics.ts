export class Prototype {
  greeting: string = "Hello";

  greet(): void {
    console.log(this.greeting);
  }

  clone(): Prototype {
    return new Prototype();
  }
}

const object: Prototype = new Prototype();
object.greet();

const cloned: Prototype = object.clone();
cloned.greeting = "Hi there!";
cloned.greet();

export interface Prototype {
  farewell: () => void;
}

const withNewProperties: Prototype = object.clone();
withNewProperties.farewell = function (): void {
  console.log("Bye");
};
withNewProperties.farewell();
