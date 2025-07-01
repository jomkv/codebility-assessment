import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // If statusCode is not set or is a success code, default to 500
  let statusCode: number = res.statusCode;
  if (statusCode < 400) {
    statusCode = 500;
  }

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack, // Hide stack at production
  });
};

export default errorHandler;
