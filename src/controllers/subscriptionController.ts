import { RequestHandler, Response } from "express";
import { SubscriptionService } from "../services/impl/SubscriptionService";
import { asyncHandler } from "../utils/asyncHandler";
import { AuthRequest } from "../domain/interfaces";
import { SubscriptionCreateRequestSchema } from "../domain/subscription";

const subscriptionService = new SubscriptionService()

export const getMySubscriptions: RequestHandler = asyncHandler(
    async(req: AuthRequest, res: Response) => {
        const userId = req.userId!
        const result = await subscriptionService.getMySubscriptions(userId)
        return res.status(result.statusCode).json(result)
    }
    
)

export const getSubscriptionById: RequestHandler = asyncHandler(
    async(req:AuthRequest,res: Response) => {
        const userId = req.userId!
        const subscriptionId = req.params.subscriptionId!
        const result = await subscriptionService.getSubscriptionById(userId,subscriptionId)
        return res.status(result.statusCode).json(result)
    }
)

export const createSubscription: RequestHandler = asyncHandler(
    async(req: AuthRequest, res: Response) => {
        const userId = req.userId!
        const validatedData = SubscriptionCreateRequestSchema.parse(req.body)
        const result = await subscriptionService.createSubscription(userId,validatedData)
        return res.status(result.statusCode).json(result)
    }
)