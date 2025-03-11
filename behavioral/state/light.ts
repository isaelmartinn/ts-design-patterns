export interface LightState {
  switchState(lightSwitch: LightSwitch): void;
}

export class OnState implements LightState {
  switchState(lightSwitch: LightSwitch): void {
    console.log("Light state is On. Turning Off...");
    lightSwitch.setState(new OffState());
  }
}

export class OffState implements LightState {
  switchState(lightSwitch: LightSwitch): void {
    console.log("Light state is Off. Turning On...");
    lightSwitch.setState(new OnState());
  }
}

export class LightSwitch {
  constructor(private state: LightState) {}

  setState(state: LightState) {
    this.state = state;
  }

  press() {
    this.state.switchState(this);
  }
}

/// Client Code
const lightSwitch = new LightSwitch(new OffState());
lightSwitch.press();
lightSwitch.press();
