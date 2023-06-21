import { Router } from 'express';
import UserController from '../../../../controllers/api/v1/users/UserController';

const route = Router();

route.get('/', UserController.getAll);

export default route;
