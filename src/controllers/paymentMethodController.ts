import { Request, RequestHandler, Response } from "express";
import { PaymentMethodService } from "../services/impl/PaymentMethodService";
import { asyncHandler } from "../utils/asyncHandler";
import { AuthRequest } from "../domain/interfaces";
import { PaymentMethodCreateRequestSchema } from "../domain/paymentMethodSchema";

const paymentMethodService = new PaymentMethodService()

export const getAllPaymentMethodTypes: RequestHandler = asyncHandler(
    async(req:Request,res:Response) => {
        const result = await paymentMethodService.getAllPaymentMethodTypes()
        return res.status(result.statusCode).json(result)
    }
)
export const getMyPaymentMethods: RequestHandler = asyncHandler(
    async(req:AuthRequest,res: Response) => {
        const userId = req.userId!
        const result = await paymentMethodService.getMyPaymentMethods(userId)
        return res.status(result.statusCode).json(result)
    }
)

export const createPaymentMethod: RequestHandler = asyncHandler(
    async(req:AuthRequest,res:Response) => {
        const userId = req.userId!
        const validatedData = PaymentMethodCreateRequestSchema.parse(req.body)
        const result = await paymentMethodService.createPaymentMethod(userId,validatedData)
        return res.status(result.statusCode).json(result)
    }
    
)