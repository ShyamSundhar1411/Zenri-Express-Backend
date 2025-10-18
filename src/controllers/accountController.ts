import { RequestHandler, Response, Request } from "express"
import { AccountService } from "../services/impl/AccountService"
import { asyncHandler } from "../utils/asyncHandler"
import { AuthRequest } from "../domain/interfaces"
import {
  CreateBankAccountRequest,
  CreateBankAccountSchema
} from "../domain/accountSchema"

const accountService = new AccountService()

export const getAllAccountTypes: RequestHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const result = await accountService.getAllAccountTypes()
    return res.status(result.statusCode).json(result)
  }
)

export const getMyBankAccounts: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.userId!
    const result = await accountService.getMyBankAccounts(userId)
    return res.status(result.statusCode).json(result)
  }
)

export const createBankAccount: RequestHandler<
  Record<any, any>,
  any,
  CreateBankAccountRequest
> = asyncHandler(async (req: AuthRequest, res: Response) => {
  const userId = req.userId!
  const parsedData = CreateBankAccountSchema.parse(req.body)
  const result = await accountService.createBankAccount(userId, parsedData)
  return res.status(result.statusCode).json(result)
})

export const getBankAccountById: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.userId!
    const id = req.params.id!
    const result = await accountService.getBankAccountById(id, userId)
    return res.status(result.statusCode).json(result)
  }
)
