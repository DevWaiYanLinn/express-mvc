import { Router } from 'express';
import AdminController from '../../../../controllers/api/v1/admins/AdminController';

const route = Router();

route.get('/', AdminController.getAll);

export default route;
