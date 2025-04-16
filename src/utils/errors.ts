import { STATUS_CODES } from "../constants/app";

class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequestException extends AppError {
  constructor(message = "Bad Request") {
    super(message, STATUS_CODES.BAD_REQUEST);
  }
}

export class NotFoundException extends AppError {
  constructor(message = "Not Found") {
    super(message, STATUS_CODES.NOT_FOUND);
  }
}

export class UnauthorizedException extends AppError {
  constructor(message = "Unauthorized") {
    super(message, STATUS_CODES.UNAUTHORIZED);
  }
}

export class InternalServerError extends AppError {
  constructor(message = "Internal Server Error") {
    super(message, STATUS_CODES.INTERNAL_SERVER_ERROR);
  }
}

export default AppError;
