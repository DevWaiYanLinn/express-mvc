
import { Router } from "express"; 
import UserController from "../../../../controllers/UserController";

const route = Router();

route.get('/', UserController.getAll)

export default route;