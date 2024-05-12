export interface State {
  handle(context: MusicPlayer): void;
}

export class PlayingState implements State {
  handle(context: MusicPlayer): void {
    console.log("Player is in playing state");
  }
}

export class PausedState implements State {
  handle(context: MusicPlayer): void {
    console.log("Player is in paused state");
  }
}

export class SttopedState implements State {
  handle(context: MusicPlayer): void {
    console.log("Player is in stopped state");
  }
}

export class MusicPlayer {
  private state: State;

  constructor(state: State) {
    this.transitionTo(state);
  }

  public transitionTo(state: State): void {
    console.log(`MusicPlayer: Transition to ${(<any>state.constructor).name}`);
    this.state = state;
  }

  public request(): void {
    this.state.handle(this);
  }
}

const musicPlayer = new MusicPlayer(new SttopedState());

musicPlayer.request();

musicPlayer.transitionTo(new PlayingState());
musicPlayer.request();

musicPlayer.transitionTo(new PausedState());
musicPlayer.request();
