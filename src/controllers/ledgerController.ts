import { RequestHandler, Response } from "express"
import { LedgerService } from "../services/impl/LedgerService"
import { asyncHandler } from "../utils/asyncHandler"
import { AuthRequest } from "../domain/interfaces"
import { LedgerCreateRequestSchema } from "../domain/ledger"

const ledgerService = new LedgerService()

export const getMyLedgers: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.userId!
    const result = await ledgerService.getMyLedgers(userId)
    return res.status(result.statusCode).json(result)
  }
)

export const getLedgerById: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.userId!!
    const ledgerId = req.params.ledgerId!!
    const result = await ledgerService.getLedgerById(userId, ledgerId)
    return res.status(result.statusCode).json(result)
  }
)
export const createLedger: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.userId!!
    const result = await ledgerService.createLedger(userId, req.body)
    return res.status(result.statusCode).json(result)
  }
)
