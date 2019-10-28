import "reflect-metadata";
import { Methods, MetadataKeys } from "../../constants/enum";

// routeBinder will be used to bind/decorate functions, so 'target' will be the prototype
export function routeBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor): void {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key); // key is the function name
      Reflect.defineMetadata(MetadataKeys.method, method, target, key); // key is the 'method' parameter
    };
  };
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
export const del = routeBinder(Methods.del);
