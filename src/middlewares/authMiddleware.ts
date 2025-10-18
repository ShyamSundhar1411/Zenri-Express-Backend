import { AuthRequest } from "../domain/interfaces"
import { Response, NextFunction } from "express"
import { supabaseJWTEncodedSecretKey } from "../config/supabase"
import prismaClient from "../config/prismaClient"
import { jwtVerify, errors as JoseErrors } from "jose"

export class AuthMiddleware {
  authRequired = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.headers.authorization?.split(" ")[1]
      if (!token) {
        return res.status(401).json({ error: "Unauthorized" })
      }

      let payload
      try {
        const result = await jwtVerify(token, supabaseJWTEncodedSecretKey)
        payload = result.payload
      } catch (err: any) {
        if (err instanceof JoseErrors.JWTExpired) {
          return res.status(401).json({ error: "Token expired" })
        }
        return res.status(401).json({ error: "Invalid token" })
      }

      const userId = payload.sub as string
      const prismaUser = await prismaClient.user.findFirst({
        where: { supabaseUserId: userId }
      })
      if (!prismaUser) {
        return res
          .status(403)
          .json({ error: "User not registered in app database" })
      }

      req.userId = prismaUser.id
      next()
    } catch (error) {
      console.error("AuthMiddleware error:", error)
      return res.status(500).json({ error: "Internal authentication error" })
    }
  }
}
