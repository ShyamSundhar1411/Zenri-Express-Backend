import { Router } from "express"
import authRouter from "./authRoutes"
import accountRouter from "./accountRoutes"
import cardRouter from "./cardRouter"
import ledgerRouter from "./ledgerRouter"
import categoryRouter from "./categoryRouter"
import transactionRouter from "./transactionRoutes"
import subscriptionRouter from "./subscriptionRouter"
import paymentMethodRouter from "./paymentMethodRouter"

const zenriRouter: Router = Router()

zenriRouter.use("/auth", authRouter)
zenriRouter.use("/accounts", accountRouter)
zenriRouter.use("/cards", cardRouter)
zenriRouter.use("/categories", categoryRouter)
zenriRouter.use("/ledger", ledgerRouter)
zenriRouter.use("/transactions", transactionRouter)
zenriRouter.use("/subscriptions",subscriptionRouter)
zenriRouter.use("/payment-methods",paymentMethodRouter)
export default zenriRouter
