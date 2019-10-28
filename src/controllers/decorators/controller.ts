import "reflect-metadata";
import AppRouter from "../../AppRouter";
import { Methods, MetadataKeys } from "../../constants/enum";
import { bodyValidator } from "../../middlewares";

// 'controller' decorator will be used to decorate class,
// the 'target' refers to the constructor of the class
export function controller(routePrefix: string) {
  // decorator if used on class, will be working on top of its constructor function
  return function(target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]; // method being decorated
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata(MetadataKeys.use, target.prototype, key) || [];

      const requiredBodyProps =
        Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) ||
        [];

      const validatorMiddleware = bodyValidator(requiredBodyProps);

      if (path) {
        const router = AppRouter.getInstance();
        const fullPath = `${routePrefix}${path}`;
        router[method](
          fullPath,
          ...middlewares,
          validatorMiddleware,
          routeHandler
        );
      }
    }
  };
}
