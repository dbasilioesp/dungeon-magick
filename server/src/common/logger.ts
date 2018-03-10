import { winston } from './provider';

interface LogMessage {
  toString();
}

export class Logger {

  private winston;
  private rollbar;

  constructor(_winston) {
    this.winston = _winston;
  }

  public info(log: LogMessage): void {
    const message = logStack.toString();
    this.winston.info(message);
  }

  public error(log: LogMessage): void {
    const message = logStack.toString();
    this.winston.error(message);
  }

}

export class LogStack implements LogMessage {

  private messages = [];

  public push(message: string): void {
    this.messages.push(message);
  }

  public clear(): void {
    this.messages = [];
  }

  public toString() {
    return this.messages.join('\n');
  }

}

export const logger = new Logger(winston);

export const logStack = new LogStack();
