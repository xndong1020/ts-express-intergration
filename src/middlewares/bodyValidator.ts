import { Response, Request, RequestHandler, NextFunction } from "express";

export function bodyValidator(keys: string[]): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send("Invalid Request");
      return;
    }

    for (const key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Key ${key} missing. Invalid Request`);
        return;
      }
    }

    next();
  };
}
