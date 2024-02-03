export enum LogLevel {
  INFO,
  ERROR,
  WARNING,
}

export class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  public log(level: LogLevel, mesasge: string): void {
    console.log(`[${LogLevel[level]}] ${mesasge}`);
  }
}

const logger1 = Logger.getInstance();
logger1.log(LogLevel.INFO, "Application started");

const logger2 = Logger.getInstance();
logger2.log(LogLevel.ERROR, "An error occured");

console.log(logger1 === logger2);
