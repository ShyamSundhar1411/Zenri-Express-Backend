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
  const validatedData = SignUpSchema.parse(req.body)
  const result = await authService.signup(validatedData)
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
  const valdiatedData = LoginSchema.parse(req.body)
  const result = await authService.login(valdiatedData)
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
    const data = RefreshTokenSchema.parse(req.body)
    const result = await authService.getAccessTokenFromRefreshToken(data)
    res.status(result.statusCode).json(result)
  }
)

