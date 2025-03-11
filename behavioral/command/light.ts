export interface ICommand {
  execute(): void;
  undo(): void;
}

export class Light {
  turnOn(): void {
    console.log("The light is on");
  }

  turnOff(): void {
    console.log("The light is off");
  }
}

export class TurnOnCommand implements ICommand {
  constructor(private ligth: Light) {}

  execute(): void {
    this.ligth.turnOn();
  }

  undo(): void {
    this.ligth.turnOff();
  }
}

export class TurnOffCommand implements ICommand {
  constructor(private ligth: Light) {}

  execute(): void {
    this.ligth.turnOff();
  }

  undo(): void {
    this.ligth.turnOn();
  }
}

export class SimpleRemoteControl {
  private currentCommand!: ICommand;
  private undoCommand!: ICommand;
  private commandQueue: ICommand[] = [];

  setCommand(command: ICommand) {
    this.undoCommand = this.currentCommand;
    this.currentCommand = command;
    this.commandQueue.push(command);
  }

  buttonWasPressed() {
    if (this.commandQueue.length > 0) {
      const command = this.commandQueue.shift();
      command?.execute();
    }
  }

  undoButtonWasPressed() {
    this.undoCommand.execute();
  }

  hasCommands() {
    return this.commandQueue.length > 0;
  }
}

/// Client Code
const remote = new SimpleRemoteControl();
const light = new Light();

// Turning On the light
remote.setCommand(new TurnOnCommand(light));
remote.buttonWasPressed();

// Turning Off the light
remote.setCommand(new TurnOffCommand(light));
remote.buttonWasPressed();

// Undo last operation
remote.undoButtonWasPressed();

// Create a command queue
remote.setCommand(new TurnOnCommand(light));
remote.setCommand(new TurnOffCommand(light));

while (remote.hasCommands()) {
  remote.buttonWasPressed();
}
