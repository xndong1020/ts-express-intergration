import "reflect-metadata";
import AppRouter from "../../AppRouter";

export function controller(routePrefix: string) {
  // decorator if used on class, will be working on top of its constructor function
  return function(target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]; // method being decorated
      const path = Reflect.getMetadata("path", target.prototype, key);
      if (path) {
        const router = AppRouter.getInstance();
        const fullPath = `${routePrefix}${path}`;
        router.get(fullPath, routeHandler);
      }
    }
  };
}
