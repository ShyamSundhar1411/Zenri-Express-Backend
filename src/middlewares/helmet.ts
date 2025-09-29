import { RequestHandler } from "express"
import helmet from "helmet"

export const helmetMiddleware: RequestHandler = helmet()
