export interface Car {
  cost(): number;
  description(): string;
}

export class BaseCar implements Car {
  cost(): number {
    return 20000;
  }

  description(): string {
    return "Base Car";
  }
}

export  class SunroofDecorator implements Car {
  constructor(private car: Car) {}

  cost(): number {
    return this.car.cost() + 1200;
  }

  description(): string {
    return `${this.car.description()}, with a sunroof`;
  }
}

export class LeatherSeatsDecorator implements Car {
  constructor(private car: Car) {}

  cost(): number {
    return this.car.cost() + 1500;
  }

  description(): string {
    return `${this.car.description()}, with leather seats`;
  }
}

export class TurboEngineDecorator implements Car {
  constructor(private car: Car) {
  }
  cost(): number {
    return this.car.cost() + 5000;
  }

  description(): string {
    return `${this.car.description()}, with a turbocharged enginee`;
  }
}

const baseCar = new BaseCar();
const carWithSunroof = new SunroofDecorator(baseCar);

console.log(`Order: ${carWithSunroof.description()}`);
console.log(`Cost: ${carWithSunroof.cost()}`);

const carWithLeatherSeats = new LeatherSeatsDecorator(carWithSunroof);
const fullyLoadedCar = new TurboEngineDecorator(carWithLeatherSeats);

console.log(`Order: ${fullyLoadedCar.description()}`);
console.log(`Cost: ${fullyLoadedCar.cost()}`);
