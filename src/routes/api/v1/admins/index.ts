import { Router } from "express";
import AdminController from "../../../../controllers/AdminController";


const route = Router();

route.get('/', AdminController.getAll)

export default route;