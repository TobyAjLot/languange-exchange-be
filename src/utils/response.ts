import { Response } from "express";
import { STATUS_CODES } from "../constants/app";

interface ResponsePayload {
  statusCode?: number;
  message?: string;
  data?: object | null;
}

export class ResponseHandler {
  static sendSuccess(
    res: Response,
    {
      statusCode = STATUS_CODES.OK,
      message = "Success",
      data = null,
    }: ResponsePayload
  ) {
    res.status(statusCode).json({ success: true, message, data });
  }

  static sendError(
    res: Response,
    {
      statusCode = STATUS_CODES.INTERNAL_SERVER_ERROR,
      message = "Internal Server Error",
    }: ResponsePayload
  ) {
    res.status(statusCode).json({ success: false, message });
  }
}
