import { RequestHandler,Request,Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { logInRequest, loginSchema, signUpRequest, signUpSchema } from "../domain/authSchema";
import { AuthService } from "../services/impl/AuthService";

const authService = new AuthService();

export const signup: RequestHandler<{},{},signUpRequest> = asyncHandler(
    async (req:Request,res:Response) => {
        const validatedData = signUpSchema.parse(req.body);
        const result = await authService.signup(validatedData);
        if(result.error){
            res.status(result.statusCode || 500).json(result);
        }
        res.status(result.statusCode).json(result);
    }
)

export const login: RequestHandler<{},{},logInRequest> = asyncHandler(
    async (req:Request,res:Response) => {
        const valdiatedData = loginSchema.parse(req.body);
        const result = await authService.login(valdiatedData);
        if(result.error){
            res.status(result.statusCode || 500).json(result);
        }
        res.status(result.statusCode).json(result);
    }
)