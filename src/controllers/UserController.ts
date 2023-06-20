import type { Request, Response } from "express";
import BaseController from "./BaseController";

class UserController extends BaseController {
  constructor() {
    super();
  }

  public getAll(req: Request, res: Response) {
    req.body.message = "Hello Admin";
    res.json(req.body);
  }
}

export default new UserController();
