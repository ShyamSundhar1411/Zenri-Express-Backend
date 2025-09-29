import { RequestHandler, Response } from "express";
import { CardService } from "../services/impl/CardService";
import { asyncHandler } from "../utils/asyncHandler";
import { AuthRequest } from "../domain/interfaces";

const cardService = new CardService();


export const getMyCards: RequestHandler = asyncHandler(
    async (req:AuthRequest, res: Response) => {
        const userId = req.userId!
        const result = await cardService.getMyCards(userId)
        return res.status(result.statusCode).json(result)
    }
)