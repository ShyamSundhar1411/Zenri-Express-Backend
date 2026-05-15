import { z } from 'zod';
import { RequestHandler, Response } from "express"
import { AuthRequest } from "../domain/interfaces"
import { TransactionService } from "../services/impl/TransactionService"
import { asyncHandler } from "../utils/asyncHandler"
import { TransactionCreateRequestSchema, TransactionCsvRowSchema } from "../domain/transaction"
import { parseCsvFile } from "../utils/fileUtils"

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
    const transactionId = req.params.transactionId!! as string
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


    const result = await transactionService.createTransaction(
      userId,
      req.body
    )
    return res.status(result.statusCode).json(result)
  }
)

export const getTransactionsByLedgerId: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.userId!!
    const ledgerId = req.params.ledgerId!! as string
    const result = await transactionService.getTransactionsByLedgerId(
      userId,
      ledgerId
    )
    return res.status(result.statusCode).json(result)
  }
)

export const updateTransaction: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.userId!!
    const transactionId = req.params.transactionId!! as string
    const result = await transactionService.updateTransaction(
      userId,
      transactionId,
      req.body
    )
    return res.status(result.statusCode).json(result)
  }
)

export const bulkUploadTransactions: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const authReq = req as AuthRequest & { file?: Express.Multer.File }
    const userId = authReq.userId!
    if (!authReq.file) {
      return res.status(400).json({
        error: "CSV file is required",
        statusCode: 400,
      });
    }
    const rows = await parseCsvFile(authReq.file.path)
    const mappedRows = rows.map((row) => ({
      amount: Number(row.Amount),
      currencyCode: row.Currency,
      transactionType: row["Transaction Type"],
      categoryName: row.Category,
      paymentMethodName: row["Payment Method"],
      description: row.Description,
      transactedOn: row["Transaction Date"],
      isSubscription:
        row["Is Subscription"]?.toLowerCase() === "true",
      subscriptionName: row.Subscription || undefined,
    }));

    const parsedCsvRows = z.array(TransactionCsvRowSchema).safeParse(mappedRows);

    if (!parsedCsvRows.success) {
      return res.status(400).json({
        error: "CSV validation failed",
        details: parsedCsvRows.error.flatten(),
        statusCode: 400,
      });
    }
    const result = await transactionService.createBulkTransaction(
      userId,
      parsedCsvRows.data
    )
    return res.status(result.statusCode).json(result)
  }
)