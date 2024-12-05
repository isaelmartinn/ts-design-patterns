class Animal {
  constructor(public name: string) {
  }

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  constructor(public name: string = "dog") {
    super(name);
  }
}

const myDog: Dog = new Dog("Max");
myDog.move(10);


class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
  ) {
  }

  display(): void {
    console.log({
      id: this.id,
      price: this.price,
      description: this.description,
    });
  }
}

class Book extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public author: string,
    public title: string,
  ) {
    super(id, price, description);
  }

  display(): void {
    super.display();

    console.log({
      id: this.id,
      author: this.author,
      title: this.title,
    });
  }
}

class Electronic extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public brand: string,
    public model: string,
  ) {
    super(id, price, description);
  }

  display(): void {
    super.display();

    console.log({
      brand: this.brand,
      model: this.model,
    });
  }
}

const myBook = new Book(
  "1",
  12.90,
  "a good book",
  "John Doe",
  "title book",
);
myBook.display();

const laptop = new Electronic(
  "2",
  120,
  "a good laptop",
  "Apple",
  "Mackbook pro",
);
myBook.display();


