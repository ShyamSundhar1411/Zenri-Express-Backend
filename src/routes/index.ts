import { Router } from "express"
import authRouter from "./authRoutes"
import accountRouter from "./accountRoutes"
import cardRouter from "./cardRouter"

const zenriRouter: Router = Router()

zenriRouter.use("/auth", authRouter)
zenriRouter.use("/accounts", accountRouter)
zenriRouter.use("/cards",cardRouter)
export default zenriRouter
