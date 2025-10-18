import { Router } from "express"
import authRouter from "./authRoutes"
import accountRouter from "./accountRoutes"
import cardRouter from "./cardRouter"
import ledgerRouter from "./ledgerRouter"
import categoryRouter from "./categoryRouter"
import transactionRouter from "./transactionRoutes"

const zenriRouter: Router = Router()

zenriRouter.use("/auth", authRouter)
zenriRouter.use("/accounts", accountRouter)
zenriRouter.use("/cards", cardRouter)
zenriRouter.use("/categories", categoryRouter)
zenriRouter.use("/ledger", ledgerRouter)
zenriRouter.use("/transactions",transactionRouter)
export default zenriRouter
