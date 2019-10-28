import "reflect-metadata";
import { RequestHandler } from "express";
import { MetadataKeys } from "../../constants/enum";

export function use(middleware: RequestHandler) {
  return function(target: any, key: string): void {
    // retrieve existing 'use' metadata
    const existingMiddlewares =
      Reflect.getMetadata(MetadataKeys.use, target, key) || [];
    // add middleware
    existingMiddlewares.push(middleware);
    // update 'use' metadata
    Reflect.defineMetadata(MetadataKeys.use, existingMiddlewares, target, key);
  };
}
