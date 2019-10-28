import { Router } from "express";

// singleton express router class
export default class AppRouter {
  static instance: Router = Router();

  static getInstance(): Router {
    if (!AppRouter.instance) AppRouter.instance = Router();
    return AppRouter.instance;
  }
}
