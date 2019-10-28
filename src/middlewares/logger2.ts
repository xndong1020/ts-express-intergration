import { Request, Response, NextFunction } from "express";

export const logger2 = function(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("logger 2 working");
  next();
};
