export abstract class State {
  abstract power: number;
  abstract energy: number;
  protected freeza: Freeza;

  public setFreeza(freeza: Freeza) {
    this.freeza = freeza;
  }

  public getEnergy() {
    return this.energy;
  }

  public abstract attack(): void;
  public abstract defend(value: number): void;
}

export class Freeza {
  private state: State;

  constructor(state: State) {
    this.transitionTo(state);
    this.state.setFreeza(this);
  }

  isAlive(): boolean {
    return this.state.getEnergy() > 0;
  }

  public transitionTo(state: State): void {
    console.log("-----------------------------");
    console.log(`Freeze: Transition to ${state.constructor.name}.`);
    console.log("-----------------------------");

    this.state = state;
    this.state.setFreeza(this);
  }

  public attack(): void {
    this.state.attack();
  }

  public defend(attack: number): void {
    this.state.defend(attack);
  }
}

export class Transformation1 extends State {
  power = 530000;
  energy = 5;

  public attack(): void {
    const attackToEnemy = Math.round(this.power * (Math.random() / 8));
    const restoreEnergy = Math.round(Math.random());

    this.energy = this.energy + restoreEnergy;

    console.log("Freeza attack in the state form 1 -->", attackToEnemy);
    console.log(
      `Freeza restore energy ${restoreEnergy} and his energy is ${this.energy}\n`
    );
  }

  public defend(attack: number): void {
    const attackFromEnemy = Math.round(attack * (Math.random() / 7));
    this.energy = this.energy - attackFromEnemy;

    console.log("Freeza defend in form 1");
    console.log(
      `Freeza received an attack of ${attackFromEnemy} and his energy is ${this.energy}\n`
    );

    if (this.energy < 2) {
      this.freeza.transitionTo(new Transformation2());
    }
  }
}

export class Transformation2 extends State {
  power = 106000;
  energy = 10;

  public attack(): void {
    const attackToEnemy = Math.round(this.power * (Math.random() / 7));
    const restoreEnergy = Math.round(Math.random() * 2);

    this.energy = this.energy + restoreEnergy;

    console.log("Freeza attack in the state form 2 -->", attackToEnemy);
    console.log(
      `Freeza restore energy ${restoreEnergy} and his energy is ${this.energy}\n`
    );
  }

  public defend(attack: number): void {
    const attackFromEnemy = Math.round(attack * (Math.random() / 6));
    this.energy = this.energy - attackFromEnemy;

    console.log("Freeza defend in form 2");
    console.log(
      `Freeza received an attack of ${attackFromEnemy} and his energy is ${this.energy}\n`
    );

    if (this.energy < 5) {
      this.freeza.transitionTo(new Transformation3());
    }

    if (this.energy > 20) {
      this.freeza.transitionTo(new Transformation1());
    }
  }
}

export class Transformation3 extends State {
  power = 212000;
  energy = 15;

  public attack(): void {
    const attackToEnemy = Math.round(this.power * (Math.random() / 6));
    const restoreEnergy = Math.round(Math.random() * 3);

    this.energy = this.energy + restoreEnergy;

    console.log("Freeza attack in the state form 3 -->", attackToEnemy);
    console.log(
      `Freeza restore energy ${restoreEnergy} and his energy is ${this.energy}\n`
    );
  }

  public defend(attack: number): void {
    const attackFromEnemy = Math.round(attack * (Math.random() / 5));
    this.energy = this.energy - attackFromEnemy;

    console.log("Freeza defend in form 3");
    console.log(
      `Freeza received an attack of ${attackFromEnemy} and his energy is ${this.energy}\n`
    );

    if (this.energy < 5) {
      this.freeza.transitionTo(new Transformation4());
    }

    if (this.energy > 25) {
      this.freeza.transitionTo(new Transformation2());
    }
  }
}

export class Transformation4 extends State {
  power = 406000;
  energy = 20;

  public attack(): void {
    const attackToEnemy = Math.round(this.power * (Math.random() / 5));
    const restoreEnergy = Math.round(Math.random() * 4);

    this.energy = this.energy + restoreEnergy;

    console.log("Freeza attack in the state form 4 -->", attackToEnemy);
    console.log(
      `Freeza restore energy ${restoreEnergy} and his energy is ${this.energy}\n`
    );
  }

  public defend(attack: number): void {
    const attackFromEnemy = Math.round(attack * (Math.random() / 6));
    this.energy = this.energy - attackFromEnemy;

    console.log("Freeza defend in form 4");
    console.log(
      `Freeza received an attack of ${attackFromEnemy} and his energy is ${this.energy}\n`
    );

    if (this.energy < 5) {
      this.freeza.transitionTo(new GoldenFreeza());
    }

    if (this.energy > 25) {
      this.freeza.transitionTo(new Transformation3());
    }
  }
}

export class GoldenFreeza extends State {
  power = 812000;
  energy = 30;

  public attack(): void {
    const attackToEnemy = Math.round(this.power * (Math.random() / 4));
    const restoreEnergy = Math.round(Math.random() * 5);

    this.energy = this.energy + restoreEnergy;

    console.log(
      "Freeza attack in the state form Golden Freeza -->",
      attackToEnemy
    );
    console.log(
      `Freeza restore energy ${restoreEnergy} and his energy is ${this.energy}\n`
    );
  }

  public defend(attack: number): void {
    const attackFromEnemy = Math.round(attack * (Math.random() / 5));
    this.energy = this.energy - attackFromEnemy;

    console.log("Freeza defend in form Golden Freeza");
    console.log(
      `Freeza received an attack of ${attackFromEnemy} and his energy is ${this.energy}\n`
    );

    if (this.energy > 50) {
      this.freeza.transitionTo(new Transformation4());
    }
  }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const freeza = new Freeza(new Transformation1());

(async () => {
  while (freeza.isAlive) {
    freeza.attack();
    await sleep(1000);
    freeza.defend(10);
    await sleep(1000);
  }
})();
