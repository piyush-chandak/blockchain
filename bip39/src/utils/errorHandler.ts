import {ERROR_NAME, HTTP_STATUS, MESSAGES} from '../helpers/constants';
import {logger} from './logger';

class BaseError extends Error {
  public description = '';
  public isOperational = false;
  public statusCode = HTTP_STATUS.INTERNAL_SERVER;

  constructor({name, statusCode, isOperational, description}) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.description = description;
    Error.captureStackTrace(this);
  }
}

export class InternalServerError extends BaseError {
  constructor(description = MESSAGES.INTERNAL_SERVER, statusCode = HTTP_STATUS.INTERNAL_SERVER, isOperational = false ) {
    super({name: ERROR_NAME.INTERNAL_SERVER, description, statusCode, isOperational});
  }
}

export class NotFoundError extends BaseError {
  constructor(description = MESSAGES.NOT_FOUND, statusCode = HTTP_STATUS.NOT_FOUND, isOperational = true) {
    super({name: ERROR_NAME.NOT_FOUND, description, statusCode, isOperational});
  }
}

export class BadRequestError extends BaseError {
  constructor(description = MESSAGES.BAD_REQUEST, statusCode = HTTP_STATUS.BAD_REQUEST, isOperational = true) {
    super({name: ERROR_NAME.BAD_REQUEST, description, statusCode, isOperational});
  }
}

export class CustomError extends BaseError {
  constructor(name = ERROR_NAME.CUSTOM, description, statusCode = HTTP_STATUS.BAD_REQUEST, isOperational = true) {
    name = name.replace(' ', '_').toLowerCase();
    super({name, description, statusCode, isOperational});
  }
}

class ErrorHandler {
  public async handleError(error: Error): Promise<void> {
    logger.error(error); // Logging error
  }

  public isTrustedError(error: Error) {
    if (error instanceof BaseError) {
      return error.isOperational;
    }
    return false;
  }
}

export const errorHandler = new ErrorHandler();
