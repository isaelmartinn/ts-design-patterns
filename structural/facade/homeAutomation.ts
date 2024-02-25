export interface LightSystem {
  turnOn(): void;
  turnOff(): void;
}

export interface SecuritySystem {
  arm(): void;
  disarm(): void;
}

export class MyLightSystem implements LightSystem {
  turnOn() {
    console.log("Lights turned on");
  }

  turnOff() {
    console.log("Lights turned off");
  }
}

export class MySecuritySystem implements SecuritySystem {
  arm() {
    console.log("Security System armed");
  }

  disarm() {
    console.log("Security System disarmed");
  }
}

export class HomeAutomationFacade {
  constructor(private lightSystem: LightSystem, private securitySystem: SecuritySystem) {}

  goodMorning() {
    this.lightSystem.turnOn();
    this.securitySystem.disarm();
  }

  goodNight() {
    this.lightSystem.turnOff();
    this.securitySystem.arm();
  }
}

const myLightSystem = new MyLightSystem();
const mySecuritySystem = new MySecuritySystem();

const myHomeAutomation = new HomeAutomationFacade(myLightSystem, mySecuritySystem);

myHomeAutomation.goodMorning();
myHomeAutomation.goodNight();
