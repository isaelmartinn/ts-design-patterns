export interface ICommand {
  execute(): void;
  undo(): void;
}

export class MyFileSystem {
  private commandQueue: ICommand[] = [];

  public addCommand(command: ICommand) {
    this.commandQueue.push(command);
  }

  executeCommand() {
    if (this.commandQueue.length > 0) {
      const command = this.commandQueue.shift();
      command?.execute();
    }
  }

  undoCommand() {
    if (this.commandQueue.length > 0) {
      const command = this.commandQueue.pop();
      command?.undo();
    }
  }

  hasCommands() {
    return this.commandQueue.length > 0;
  }
}

export class CreateFileCommand implements ICommand {
  constructor(private path: string) {}

  execute(): void {
    console.log(`Creating file at ${this.path}`);
  }

  undo(): void {
    console.log(`Deleting file at ${this.path}`);
  }
}

export class DeleteFileCommand implements ICommand {
  constructor(private path: string) {}

  execute(): void {
    console.log(`Deleting file at ${this.path}`);
  }

  undo(): void {
    console.log(`Restoring file at ${this.path}`);
  }
}

export class ReadFileCommand implements ICommand {
  constructor(private path: string) {}

  execute(): void {
    console.log(`Reading file at ${this.path}`);
  }

  undo(): void {
    console.log("Undo operation is not available");
  }
}

export class UpdateFileCommand implements ICommand {
  constructor(
    private path: string,
    private newContent: string,
    private oldContent: string
  ) {}

  execute(): void {
    console.log(`Updating file ${this.path}, new content: ${this.newContent}`);
  }

  undo(): void {
    console.log(`Reverting file ${this.path}, old content: ${this.oldContent}`);
  }
}

/// Client Code
const myFileSystem = new MyFileSystem();

const path = "/path/file.txt";

// Creating a file
myFileSystem.addCommand(new CreateFileCommand(path));

const updateFile = new UpdateFileCommand(path, "new content", "old content");
myFileSystem.addCommand(updateFile);

// Read file
myFileSystem.addCommand(new ReadFileCommand(path));

// Deleting a command
myFileSystem.addCommand(new DeleteFileCommand(path));

while (myFileSystem.hasCommands()) {
  myFileSystem.executeCommand();
}
