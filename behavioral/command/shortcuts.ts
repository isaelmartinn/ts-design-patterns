export class Shortcuts {
  openUrl(url: string) {
    console.log(`Open URL: ${url}`);
  }

  shortenUrl(url: string) {
    console.log(`Shorten URL: ${url}`);
  }

  sendMessage(msg: string) {
    console.log(`Send message: ${msg}`);
  }

  translateText(originText: string) {
    console.log(`Translate text: ${originText}`);
  }

  downloadFile(fileUrl: string) {
    console.log(`Download file: ${fileUrl}`);
  }
}

export class UIEventHandler {
  constructor(public shortcuts: Shortcuts) {}

  handleAction(action: ShortcutsMethods, arg: string) {
    this.shortcuts[action](arg);
  }
}

export type ShortcutsMethods = Methods<Shortcuts>;

export type Methods<T> = {
  [P in keyof T]: T[P] extends (...args: any) => void ? P : never;
}[keyof T];

const shortcuts = new Shortcuts();
const eventHandler = new UIEventHandler(shortcuts);

eventHandler.handleAction("openUrl", "https://medium.com");
eventHandler.handleAction("sendMessage", "Hello there!");
console.log("");

export interface Command {
  name: string;
  execute(args: any): any;
}

export class OpenURLCommand implements Command {
  name = "openURL";

  execute(args: any): any {
    console.log(`Open URL: ${args[0]}`);
  }
}

export class SendMessageCommand implements Command {
  name = "SendMessage";

  execute(args: any): any {
    console.log(`Send message: ${args[0]}`);
  }
}

export class CommandManager {
  commands: Record<string, Command> = {};

  registerCommand(name: string, command: Command) {
    this.commands[name] = command;
  }

  executeCommand(command: string | Command, ...args: any) {
    if (typeof command === "string") {
      this.commands[command].execute(args);
    } else {
      command.execute(args);
    }
  }
}

export class UIEventHandler2 {
  constructor(public cmdManager: CommandManager) {}

  handleAction(command: string | Command, arg: string) {
    this.cmdManager.executeCommand(command, arg);
  }
}

const cmdManager = new CommandManager();
cmdManager.registerCommand("openUrl", new OpenURLCommand());
cmdManager.registerCommand("msg", new SendMessageCommand());

const eventHandler2 = new UIEventHandler2(cmdManager);
eventHandler2.handleAction("openUrl", "https://medium.com");
eventHandler2.handleAction("msg", "Hello Medium!");
eventHandler2.handleAction(new SendMessageCommand(), "Hello there!");
