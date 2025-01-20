export class Grinder {
  grindBeens(): void {
    console.log("Grinding beens...");
  }
}

export class Boiler {
  boilWater(): void {
    console.log("Boiling watter...");
  }
}

export class Brewer {
  brewCoffee(): void {
    console.log("Brewing coffee...");
  }
}

export class CoffeMakerFacade {
  constructor(
    private grinder: Grinder,
    private boiler: Boiler,
    private brewer: Brewer
  ) {}

  makeCoffee() {
    this.grinder.grindBeens();
    this.boiler.boilWater();
    this.brewer.brewCoffee();
  }
}

const grinder = new Grinder();
const boiler = new Boiler();
const brewer = new Brewer();

const coffeeMaker = new CoffeMakerFacade(grinder, boiler, brewer);
coffeeMaker.makeCoffee();
