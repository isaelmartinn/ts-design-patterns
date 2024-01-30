export interface Builder {
  setSeats(seats: number): this;
  setEngine(engine: string): this;
}

export class Car {
  private seats!: number;
  private engine!: string;

  public setSeats(seats: number): void {
    this.seats = seats;
  }

  public setEngine(engine: string): void {
    this.engine = engine;
  }

  public show(): void {
    console.log(`Seats: ${this.seats}`);
    console.log(`Engine: ${this.engine}`);
  }
}

export class Motorcycle {
  private seats!: number;
  private engine!: string;

  public setSeats(seats: number): void {
    if (seats > 2) {
      throw new Error("Motorcycle cannot have more than 2 seats");
    }

    this.seats = seats;
  }

  public setEngine(engine: string): void {
    this.engine = engine;
  }

  public show(): void {
    console.log(`Seats: ${this.seats}`);
    console.log(`Engine: ${this.engine}`);
  }
}

export class CarBuilder implements Builder {
  private car!: Car;

  constructor() {
    this.car = new Car();
  }

  public setSeats(seats: number): this {
    this.car.setSeats(seats);

    return this;
  }

  public setEngine(engine: string): this {
    this.car.setEngine(engine);

    return this;
  }

  public getResult(): Car {
    return this.car;
  }
}

export class MotorcycleBuilder implements Builder {
  private motorcycle!: Motorcycle;

  constructor() {
    this.motorcycle = new Motorcycle();
  }

  public setSeats(seats: number): this {
    this.motorcycle.setSeats(seats);

    return this;
  }

  public setEngine(engine: string): this {
    this.motorcycle.setEngine(engine);

    return this;
  }

  public getResult(): Motorcycle {
    return this.motorcycle;
  }
}

export class Director {
  public buildFerrarri(): Car {
    return new CarBuilder().setSeats(2).setEngine("V-12").getResult();
  }

  public buildToyota(): Car {
    return new CarBuilder().setSeats(7).setEngine("V-6").getResult();
  }

  public buildHonda(): Motorcycle {
    return new MotorcycleBuilder().setSeats(2).setEngine("V-4").getResult();
  }

  public buildYamaha(): Motorcycle {
    return new MotorcycleBuilder().setSeats(1).setEngine("V-2").getResult();
  }
}

const director = new Director();
director.buildFerrarri().show();
director.buildToyota().show();

director.buildHonda().show();
director.buildYamaha().show();
