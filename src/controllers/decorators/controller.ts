import "reflect-metadata";
import { Router } from "express";

export const router = Router();

export function controller(routePrefix: string) {
  return function(target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]; // method being decorated
      const path = Reflect.getMetadata("path", target.prototype, key);
      if (path) {
        const fullPath = routePrefix + path;
        router.get(fullPath, routeHandler);
      }
    }
  };
}
