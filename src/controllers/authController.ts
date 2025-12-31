import { RequestHandler, Request, Response } from "express"
import { asyncHandler } from "../utils/asyncHandler"
import {
  LoginRequest,
  LoginSchema,
  RefreshTokenSchema,
  SignUpRequest,
  SignUpSchema
} from "../domain/auth"
import { AuthService } from "../services/impl/AuthService"

const authService = new AuthService()

export const signup: RequestHandler<
  Record<any, any>,
  any,
  SignUpRequest
> = asyncHandler(async (req: Request, res: Response) => {

  const result = await authService.signup(req.body)
  if (result.error || !result.data) {
    return res.status(result.statusCode).json({ error: result.error });
  }
  const { tokens } = result.data
  res.cookie("accessToken", tokens.accessToken, {
    httpOnly: true, sameSite: "strict",
    path: "/",
  })
  res.cookie("refreshToken", tokens.refreshToken, {
    httpOnly: true, sameSite: "strict",
    path: "/",
  })
  res.status(result.statusCode).json(result)
})

export const login: RequestHandler<
  Record<any, any>,
  any,
  LoginRequest
> = asyncHandler(async (req: Request, res: Response) => {
  const result = await authService.login(req.body)
  if (result.error || !result.data) {
    return res.status(result.statusCode).json({ error: result.error });
  }
  const { tokens } = result.data
  res.cookie("accessToken", tokens.accessToken, {
    httpOnly: true, sameSite: "strict",
    path: "/",
  })
  res.cookie("refreshToken", tokens.refreshToken, {
    httpOnly: true, sameSite: "strict",
    path: "/",
  })
  res.status(result.statusCode).json(result)
})

export const getAccessTokenFromRefreshToken: RequestHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const result = await authService.getAccessTokenFromRefreshToken(req.body)
    res.status(result.statusCode).json(result)
  }
)

