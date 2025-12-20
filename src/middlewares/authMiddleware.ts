import { AuthRequest } from "../domain/interfaces"
import { Response, NextFunction } from "express"
import { supabase, supabaseJWTEncodedSecretKey } from "../config/supabase"
import prismaClient from "../config/prismaClient"
import { jwtVerify, errors as JoseErrors } from "jose"

export class AuthMiddleware {
  authRequired = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    let accessToken: string | undefined = undefined;
    let refreshToken: string | undefined = undefined;
    try {
      accessToken = req.cookies.accessToken;
      refreshToken = req.cookies.refreshToken;
      let user;
      if (accessToken) {
        const { data, error } = await supabase.auth.getUser(accessToken);
        if (!error && data.user) {
          user = data.user;
        }
      }
      if (!user && refreshToken) {
        const { data: sessionData, error } = await supabase.auth.refreshSession({
          refresh_token: refreshToken,
        });

        if (!error && sessionData.session) {
          accessToken = sessionData.session.access_token;
          refreshToken = sessionData.session.refresh_token;


          res.cookie("accessToken", accessToken, {
            httpOnly: true,
            sameSite: "strict",
            path: "/",
          });
          res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            sameSite: "strict",
            path: "/",
          });

          user = sessionData.session.user;
        }
      }
      if (!user) {
        const authHeader = req.headers.authorization;
        const bearerToken = authHeader?.startsWith("Bearer ")
          ? authHeader.split(" ")[1]
          : undefined;

        if (bearerToken) {
          const { data, error } = await supabase.auth.getUser(bearerToken);
          if (!error && data.user) {
            user = data.user;
          }
        }
      }

   
      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      
      const prismaUser = await prismaClient.user.findFirst({
        where: { supabaseUserId: user.id },
      });

      if (!prismaUser) {
        return res.status(403).json({ error: "User not registered in app database" });
      }

      req.userId = prismaUser.id;
      next();
    } catch (err) {
      console.error("AuthMiddleware error:", err);
      return res.status(401).json({ error: "Internal authentication error" });
    }
  }
}
