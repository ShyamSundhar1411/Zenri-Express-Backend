import { RequestHandler,Request,Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { signUpRequest, signUpSchema } from "../domain/authSchema";
import { AuthService } from "../services/impl/AuthService";

const authService = new AuthService();

export const signUp: RequestHandler<{},{},signUpRequest> = asyncHandler(
    async (req:Request,res:Response) => {
        const validatedData = signUpSchema.parse(req.body);
        const result = await authService.signUp(validatedData);
        if(result.error){
            res.status(400).json(result.data);
        }
        res.status(201).json(result);
    }
)