class Logger {
  public log(message, ...args) {
    console.log(message, args);
  }

  public error(message, ...args) {
    console.error(message, args);
  }

  public info(message, ...args) {
    console.info(message, args);
  }

  public warning(message, ...args) {
    console.log(message, args);
  }
}

export const logger = new Logger();
