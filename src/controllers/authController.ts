import { RequestHandler, Request, Response } from "express"
import { asyncHandler } from "../utils/asyncHandler"
import {
  LoginRequest,
  LoginSchema,
  SignUpRequest,
  SignUpSchema
} from "../domain/authSchema"
import { AuthService } from "../services/impl/AuthService"

const authService = new AuthService()

export const signup: RequestHandler<{}, {}, SignUpRequest> = asyncHandler(
  async (req: Request, res: Response) => {
    const validatedData = SignUpSchema.parse(req.body)
    const result = await authService.signup(validatedData)

    res.status(result.statusCode).json(result)
  }
)

export const login: RequestHandler<{}, {}, LoginRequest> = asyncHandler(
  async (req: Request, res: Response) => {
    const valdiatedData = LoginSchema.parse(req.body)
    const result = await authService.login(valdiatedData)

    res.status(result.statusCode).json(result)
  }
)
