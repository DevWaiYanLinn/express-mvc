import { Router } from "express";
import userRoutes from "../routes/api/v1/users";
import adminRoutes from "./api/v1/admins";

const route = Router();

route.use("/users", userRoutes);
route.use("/admins", adminRoutes);

export default route;
