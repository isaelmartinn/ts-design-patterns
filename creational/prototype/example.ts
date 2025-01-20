interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;

  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {
  }

  public clone(): Prototype {
    const clone = Object.create(this);
    clone.user = {...this.user};

    return clone;
  }

  public getUserDetails(): UserDetails {
    return this.user;
  }
}

const user1 = new ConcretePrototype({
  name: "John",
  age: 32,
  email: "john@example.com",
});

const user2 = user1.clone();

if (user1 === user2) {
  console.log("Both instances are the same");
} else {
  console.log("Cloned objects are separate instances");
}

interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

export abstract class Shape {
  protected constructor(public properties: ShapeProperties) {
  }

  abstract clone(): Shape;
}

export class Rectangle extends Shape {
  constructor(public properties: ShapeProperties, public width: number, public height: number) {
    super(properties);
  }

  clone(): Shape {
    const clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new Rectangle(clonedProperties, this.width, this.height);
  }
}

export class Circle extends Shape {
  constructor(public properties: ShapeProperties, public radius: number) {
    super(properties);
  }

  clone(): Shape {
    const clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new Circle(clonedProperties, this.radius);
  }
}

const redRectangle = new Rectangle({
  color: "red",
  x: 20,
  y: 100,
}, 10, 20);
const anotherRectangle = redRectangle.clone();
anotherRectangle.properties.color = "blue";

console.log(redRectangle);
console.log(anotherRectangle);
