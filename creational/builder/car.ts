export interface Engine {}

export interface BuilderCar {
  reset(): void;
  setSeats(quantity: number): void;
  setEngine(engine: string): void;
  setTripComputer(hasComputer: boolean): void;
  setGPS(hasGPS: boolean): void;
}

export class CarBuilder implements BuilderCar {
  private car!: Car;

  constructor() {
    this.reset();
  }

  public reset() {
    this.car = new Car();
  }

  public setSeats(quantity: number): void {
    this.car.addSeats(quantity);
  }

  public setEngine(engine: string): void {
    this.car.addEngine(engine);
  }

  public setTripComputer(hasComputer: boolean): void {
    this.car.addTripComputer(hasComputer);
  }

  public setGPS(hasGPS: boolean): void {
    this.car.addGPS(hasGPS);
  }

  public getProduct(): Car {
    const result = this.car;
    this.reset();

    return result;
  }
}

export type CarSpecifications = {
  seats: number;
  engine: string;
  tripComputer: boolean;
  GPS: boolean;
};

export class Car {
  private car: CarSpecifications = {
    seats: 0,
    engine: "",
    tripComputer: false,
    GPS: false,
  };

  public addSeats(quantity: number) {
    this.car.seats = quantity;
  }

  public addEngine(engine: string) {
    this.car.engine = engine;
  }

  public addTripComputer(hasComputer: boolean) {
    this.car.tripComputer = hasComputer;
  }

  public addGPS(hasGPS: boolean) {
    this.car.GPS = hasGPS;
  }

  public getSpecifications(): CarSpecifications {
    return this.car;
  }
}

export class DirectorCar {
  public constructorSportsCar(builder: BuilderCar) {
    builder.reset();
    builder.setSeats(2);
    builder.setEngine("V8");
    builder.setTripComputer(true);
    builder.setGPS(true);
  }
}

export const makeCar = () => {
  const director = new DirectorCar();

  const builder = new CarBuilder();
  director.constructorSportsCar(builder);

  const car = builder.getProduct();
  console.log(car);
};

makeCar();
