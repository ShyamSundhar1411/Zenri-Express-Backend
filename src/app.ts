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
import { cookieParserMiddleware } from "./middlewares/cookieParser"
const app: Express = express()
app.use(jsonParser)
app.use(corsMiddleware)
app.use(cookieParserMiddleware)
app.use(helmetMiddleware)
app.use(compressionMiddleware)
// app.use(loggerMiddleware)
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.get("/health", (req: Request, res: Response) => [
  res.status(200).json({
    message: "Server is up and running"
  })
])
app.get("/swagger.json", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(swaggerSpec);
});
app.use("/api/v1", zenriRouter)
app.use(errorHandler)
export default app
