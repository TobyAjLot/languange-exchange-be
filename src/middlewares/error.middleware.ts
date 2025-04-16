import { NextFunction, Request, Response } from "express";
import AppError from "../utils/errors";
import { ResponseHandler } from "../utils/response";
import { STATUS_CODES } from "../constants/app";

export class ErrorMiddleware {
  static handleError(
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    if (err instanceof AppError) {
      return ResponseHandler.sendError(res, {
        statusCode: err.statusCode,
        message: err.message,
      });
    }

    return ResponseHandler.sendError(res, {
      statusCode: STATUS_CODES.INTERNAL_SERVER_ERROR,
      message: "Internal Server Error",
    });
  }

  static handleUncaughtException(error: Error) {
    console.error("Uncaught Exception:", error);
    process.exit(1);
  }

  static handleUnhandledRejection(reason: unknown, promise: Promise<unknown>) {
    console.error("Unhandled Promise Rejection:", reason);
    throw new AppError(
      "Unhandled promise rejection",
      STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
}
