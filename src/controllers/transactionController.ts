import { RequestHandler, Response } from "express"
import { AuthRequest } from "../domain/interfaces"
import { TransactionService } from "../services/impl/TransactionService"
import { asyncHandler } from "../utils/asyncHandler"
import { TransactionCreateRequestSchema } from "../domain/transactionSchema"

const transactionService = new TransactionService()

export const getMyTransactions: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.userId!!
    const result = await transactionService.getMyTransactions(userId)
    return res.status(result.statusCode).json(result)
  }
)

export const getTransactionById: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.userId!!
    const transactionId = req.params.transactionId!!
    const result = await transactionService.getTransactionById(
      userId,
      transactionId
    )
    return res.status(result.statusCode).json(result)
  }
)

export const createTransaction: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.userId!!
    const transactionData = TransactionCreateRequestSchema.parse(req.body)
    
    const result = await transactionService.createTransaction(
      userId,
      transactionData
    )
    console.log(result)
    return res.status(result.statusCode).json(result)
  }
)

export const getTransactionsByLedgerId: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.userId!!
    const ledgerId = req.params.ledgerId!!
    const result = await transactionService.getTransactionsByLedgerId(
      userId,
      ledgerId
    )
    return res.status(result.statusCode).json(result)
  }
)