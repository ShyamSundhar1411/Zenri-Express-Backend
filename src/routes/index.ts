import { Router } from "express"
import authRouter from "./authRoutes"
import accountRouter from "./accountRoutes"

const zenriRouter: Router = Router()

zenriRouter.use("/auth", authRouter)
zenriRouter.use("/accounts", accountRouter)
export default zenriRouter
