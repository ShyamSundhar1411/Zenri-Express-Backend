import { Router } from "express";
import authRouter from "./authRoutes";

const zenriRouter: Router = Router()


zenriRouter.use("/auth",authRouter)
export default zenriRouter;