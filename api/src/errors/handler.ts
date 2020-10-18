import { ErrorRequestHandler } from "express";
import { EventEmitter } from "typeorm/platform/PlatformTools";
import { ValidationError } from "yup";

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {};
    error.inner.forEach((err) => {
      errors[err.path] = err.errors;
    });
    console.error(errors);
    return response
      .status(400)
      .json({ error: true, message: "Validate Error", errors });
  }
  console.error(error);
  return response
    .status(500)
    .json({ error: true, message: "Internal Server Error" });
};

export default errorHandler;
