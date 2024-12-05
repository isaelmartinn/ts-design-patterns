export interface Shape {
  area(): number;

  perimiter(): number;
}

export class Circle implements Shape {
  constructor(private radius: number) {
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimiter(): number {
    return 2 * Math.PI * this.radius;
  }
}

export class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
  }

  area(): number {
    return this.width * this.height;
  }

  perimiter(): number {
    return 2 * (this.width * this.height);
  }
}

function calculateTotalArea(shape: Shape): number {
  return shape.area();
}

let circle: Circle = new Circle(5);
let rectangle: Rectangle = new Rectangle(4, 6);

console.log("Area of Cirle: ", calculateTotalArea(circle));
console.log("Area of rectangle: ", calculateTotalArea(rectangle));

const date = new Date();
const currentYear = date.getFullYear();
const currentMoth = date.getMonth() + 1;
const currentDate = date.getDate();

console.log({currentDate, currentMoth, currentYear});
