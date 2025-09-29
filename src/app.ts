import express, { Express, Request, Response } from "express"
import { jsonParser } from "./middlewares/bodyParser"
import { corsMiddleware } from "./middlewares/cors"
import { helmetMiddleware } from "./middlewares/helmet"
import { compressionMiddleware } from "./middlewares/compression"
import { loggerMiddleware } from "./middlewares/logger"
import swaggerUi from "swagger-ui-express"
import { swaggerSpec } from "./config/swagger"
import zenriRouter from "./routes"
import { errorHandler } from "./utils/errorHandler"
const app: Express = express()
app.use(jsonParser)
app.use(corsMiddleware)
app.use(helmetMiddleware)
app.use(compressionMiddleware)
app.use(loggerMiddleware)
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.get("/health", (req: Request, res: Response) => [
  res.status(200).json({
    message: "Server is up and running"
  })
])
app.use("/api/v1", zenriRouter)
app.use(errorHandler)
export default app
