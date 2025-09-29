import cors from "cors"
import { RequestHandler } from "express"

export const corsMiddleware: RequestHandler = cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
})
