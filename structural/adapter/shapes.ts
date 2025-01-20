export class Rectangle {
  constructor(private width: number, private height: number) {}

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  area() {
    return this.width * this.height;
  }
}

export class Square {
  constructor(private side: number) {}

  getSide() {
    return this.side;
  }

  area() {
    return this.side * this.side;
  }
}

export class SquareToRectangleAdapter {
  constructor(private square: Square) {}

  getWidth() {
    return this.square.getSide();
  }

  getHeight() {
    return this.square.getSide();
  }

  area() {
    return this.square.area();
  }
}

/// Client Code
const square = new Square(5);
const adapter = new SquareToRectangleAdapter(square);

console.log(adapter.getHeight());
console.log(adapter.getWidth());
console.log(adapter.area());
