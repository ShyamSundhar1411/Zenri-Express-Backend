import { RequestHandler, Response } from "express";
import { LedgerService } from "../services/impl/LedgerService";
import { asyncHandler } from "../utils/asyncHandler";
import { AuthRequest } from "../domain/interfaces";

const ledgerService = new LedgerService();

export const getMyLedgers: RequestHandler = asyncHandler(
    async (req: AuthRequest, res: Response) => {
        const userId = req.userId!;
        const result = await ledgerService.getMyLedgers(userId)
        return res.status(result.statusCode).json(result)
    }
)