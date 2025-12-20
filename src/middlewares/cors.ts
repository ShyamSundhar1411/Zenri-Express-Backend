import cors from "cors"
import { RequestHandler } from "express"
import dotenv from "dotenv"
dotenv.config()
console.log(process.env.FRONTEND_URL)
export const corsMiddleware: RequestHandler = cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
})
