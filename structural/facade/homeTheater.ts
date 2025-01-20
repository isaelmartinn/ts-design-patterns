export class Amplifier {
  turnOn(): void {
    console.log("Amplifier is tunred on");
  }

  setVolume(level: number): void {
    console.log(`Volume is set to ${level}`);
  }
}

export class DvdPlayer {
  turnOn(): void {
    console.log("The DVD Player is turned on");
  }

  play(movie: string): void {
    console.log(`Playing ${movie} movie`);
  }
}

export class Projector {
  turnOn(): void {
    console.log("The Projector is turned on");
  }

  setInput(DvdPlayer: DvdPlayer): void {
    console.log(`Input set to DVD Player`);
  }
}

export class Lights {
  dim(level: number): void {
    console.log(`Lights dimmed to ${level}`);
  }
}

export class HomeTheaterFacade {
  constructor(
    private amplifier: Amplifier,
    private dvdPlayer: DvdPlayer,
    private projector: Projector,
    private lights: Lights
  ) {}

  watchMovie(movie: string, volume: number, levelLights: number) {
    this.lights.dim(levelLights);

    this.amplifier.turnOn();
    this.amplifier.setVolume(volume);

    this.dvdPlayer.turnOn();

    this.projector.turnOn();
    this.projector.setInput(this.dvdPlayer);

    this.dvdPlayer.play(movie);
  }
}

const amplifier = new Amplifier();
const dvdPlayer = new DvdPlayer();
const projector = new Projector();
const lights = new Lights();

const homeTheaterFacade = new HomeTheaterFacade(
  amplifier,
  dvdPlayer,
  projector,
  lights
);
homeTheaterFacade.watchMovie("Lord Of The Rings", 50, 15);
