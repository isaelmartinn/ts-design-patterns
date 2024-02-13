export interface Instruction {
  name: string;
  execute(): boolean;
}

export abstract class SingleInstruction implements Instruction {
  constructor(public name: string) {}

  abstract execute(): boolean;
}

export class CompositeInstruction implements Instruction {
  private children: Instruction[] = [];

  constructor(public name: string) {}

  execute(): boolean {
    let seccessful = false;

    for (const child of this.children) {
      seccessful = child.execute();

      if (!seccessful) {
        return false;
      }
    }

    return seccessful;
  }

  addChild(child: Instruction) {
    this.children.push(child);
  }

  removeChild(child: Instruction) {
    this.children = this.children.filter((c) => c.name !== child.name);
  }
}

export class LogInstruction extends SingleInstruction {
  log: string;

  constructor(name: string, log: string) {
    super(name);

    this.log = log;
  }

  execute(): boolean {
    console.log(`${this.name}: ${this.log}`);

    return true;
  }
}

export class TaskRunner {
  constructor(public tasks: Instruction[]) {}

  runTasks() {
    for (const task of this.tasks) {
      task.execute();
    }
  }
}

const startUpLogInstruction = new LogInstruction(
  "Starting",
  "Task runner booting up..."
);
const compositeInstruction = new CompositeInstruction("Composite");

const firstSubTask = new LogInstruction("Composite 1", "The first sub task");
const secondSubTask = new LogInstruction("Composite 2", "The second sub task");

compositeInstruction.addChild(firstSubTask);
compositeInstruction.addChild(secondSubTask);

const taskRunner = new TaskRunner([
  startUpLogInstruction,
  compositeInstruction,
]);

taskRunner.runTasks();
