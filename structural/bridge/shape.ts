export interface Color {
  fill(): string;
}

export class Red implements Color {
  fill(): string {
    return "Red";
  }
}

export class Blue implements Color {
  fill(): string {
    return "Blue";
  }
}

export abstract class Shape {
  constructor(protected color: Color) {}

  abstract draw(): string;
}

export class Circle extends Shape {
  draw(): string {
    return `Drawing a Circle in ${this.color.fill()}`;
  }
}

export class Square extends Shape {
  draw(): string {
    return `Drawing a Square in ${this.color.fill()}`;
  }
}

const red = new Red();
const blue = new Blue();

const redCircle = new Circle(red);
const blueSquare = new Square(blue);

console.log(redCircle.draw());
console.log(blueSquare.draw());
