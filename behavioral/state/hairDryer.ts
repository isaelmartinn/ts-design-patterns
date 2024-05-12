enum HairDryerMode {
  Off,
  Onn,
}

export class HairDryerV1 {
  mode: HairDryerMode = HairDryerMode.Off;

  constructor(mode: HairDryerMode = HairDryerMode.Off) {
    this.mode = mode;
  }

  switchMode() {
    if (this.mode === HairDryerMode.Off) {
      console.log("Turn on the hair dryer");
      this.mode = HairDryerMode.Onn;
      console.log("Blowing hot air ~~~");
    } else if (this.mode === HairDryerMode.Onn) {
      console.log("Turn Off the hair dryer");
      this.mode = HairDryerMode.Off;
    }
  }
}

const hairDryerV1 = new HairDryerV1();
hairDryerV1.switchMode(); // Blowing hot air
hairDryerV1.switchMode(); // Turn off
hairDryerV1.switchMode(); // Blowing hot air

enum HairDryerModeV2 {
  Off,
  HotAir,
  ColdAir,
}

export class HairDryerV2 {
  mode: HairDryerModeV2 = HairDryerModeV2.Off;

  constructor(mode: HairDryerModeV2 = HairDryerModeV2.Off) {
    this.mode = mode;
  }

  switchMode() {
    if (this.mode === HairDryerModeV2.Off) {
      console.log("Start to enter hot air mode");
      this.mode = HairDryerModeV2.HotAir;
      console.log("Blowing hot air ~~~");
    } else if (this.mode === HairDryerModeV2.HotAir) {
      console.log("Start to enter cold air mode");
      this.mode = HairDryerModeV2.ColdAir;
      console.log("Blowing cold air ~~~");
    } else if (this.mode === HairDryerModeV2.ColdAir) {
      console.log("Turn off the hair dryer");
      this.mode = HairDryerModeV2.Off;
    }
  }
}

console.log("\nHair Dryer V2");
const hairDryerV2 = new HairDryerV2();
hairDryerV2.switchMode(); // Blowing hot air
hairDryerV2.switchMode(); // Blowing cold air
hairDryerV2.switchMode(); // Turn off

enum HairDryerModeV3 {
  Off,
  StrongHotAir,
  HotAir,
  StrongColdAir,
  ColdAir,
}

export class HairDryerV3 {
  mode: HairDryerModeV3 = HairDryerModeV3.Off;

  constructor(mode: HairDryerModeV3 = HairDryerModeV3.Off) {
    this.mode = mode;
  }

  switchMode() {
    if (this.mode === HairDryerModeV3.Off) {
      console.log("Start to enter strong hot air mode");
      this.mode = HairDryerModeV3.StrongHotAir;
      console.log("Blowing strong hot air ~~~");
    } else if (this.mode === HairDryerModeV3.StrongHotAir) {
      console.log("Start to enter hot air mode");
      this.mode = HairDryerModeV3.HotAir;
      console.log("Blowing hot air ~~~");
    } else if (this.mode === HairDryerModeV3.HotAir) {
      console.log("Start to enter strong cold air mode");
      this.mode = HairDryerModeV3.StrongColdAir;
      console.log("Blowing strong cold air ~~~");
    } else if (this.mode === HairDryerModeV3.StrongColdAir) {
      console.log("Start to enter cold air mode");
      this.mode = HairDryerModeV3.ColdAir;
      console.log("Blowing cold air ~~~");
    } else if (this.mode === HairDryerModeV3.ColdAir) {
      console.log("Turn off the hair dryer");
      this.mode = HairDryerModeV3.Off;
    }
  }
}

console.log("\nHair Dryer V3");
const hairDryerV3 = new HairDryerV3();
hairDryerV3.switchMode(); // Blowing strong hot air
hairDryerV3.switchMode(); // Blowing hot air
hairDryerV3.switchMode(); // Blowing strong cold air
hairDryerV3.switchMode(); // Blowing cold air
hairDryerV3.switchMode(); // Turn off

export interface HairDryerState {
  doAction(context: HairDryer): void;
}

export class TurnOffState implements HairDryerState {
  doAction(context: HairDryer): void {
    console.log("Start to enter strong hot air mode");
    context.setState(new StrongHotAirState());
    console.log("Blowing strong hot air ~~~");
  }
}

export class StrongHotAirState implements HairDryerState {
  doAction(context: HairDryer): void {
    console.log("Start to enter hot air mode");
    context.setState(new HotAirState());
    console.log("Blowing hot air ~~~");
  }
}

export class HotAirState implements HairDryerState {
  doAction(context: HairDryer): void {
    console.log("Start to enter strong cold air mode");
    context.setState(new StrongColdAirState());
    console.log("Blowing strong cold air ~~~");
  }
}

export class StrongColdAirState implements HairDryerState {
  doAction(context: HairDryer): void {
    console.log("Start to enter cold air mode");
    context.setState(new ColdAirState());
    console.log("Blowing cold air ~~~");
  }
}

export class ColdAirState implements HairDryerState {
  doAction(context: HairDryer): void {
    console.log("Turn off the hair dryer");
    context.setState(new TurnOffState());
  }
}

export class HairDryer {
  constructor(private state: HairDryerState) {}

  getState(): HairDryerState {
    return this.state;
  }

  setState(state: HairDryerState) {
    this.state = state;
  }

  switchState() {
    this.state.doAction(this);
  }
}

console.log("\n Hair Dryer State Version");
const hairDryer = new HairDryer(new TurnOffState());
hairDryer.switchState(); // Blowing strong hot air
hairDryer.switchState(); // Blowing hot air
hairDryer.switchState(); // Blowing strong cold air
hairDryer.switchState(); // Blowing cold air
hairDryer.switchState(); // Turn off
