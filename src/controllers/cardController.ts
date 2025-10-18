import { RequestHandler, Request, Response } from "express"
import { CardService } from "../services/impl/CardService"
import { asyncHandler } from "../utils/asyncHandler"
import { AuthRequest } from "../domain/interfaces"
import {
  CreateCreditCard,
  CreateCreditCardSchema,
  CreateDebitCard,
  CreateDebitCardSchema
} from "../domain/cardSchema"

const cardService = new CardService()

export const getMyCards: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.userId!
    const result = await cardService.getMyCards(userId)
    return res.status(result.statusCode).json(result)
  }
)

export const getAllCardNetworks: RequestHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const result = await cardService.getAllCardNetworks()
    return res.status(result.statusCode).json(result)
  }
)
export const createDebitCard: RequestHandler<
  Record<string, never>,
  any,
  CreateDebitCard
> = asyncHandler(async (req: AuthRequest, res: Response) => {
  const userId = req.userId!

  const parsedData = CreateDebitCardSchema.parse(req.body)
  const result = await cardService.createDebitCard(userId, parsedData)
  return res.status(result.statusCode).json(result)
})

export const createCreditCard: RequestHandler<
  Record<string, never>,
  any,
  CreateCreditCard
> = asyncHandler(async (req: AuthRequest, res: Response) => {
  const userId = req.userId!
  const parsedData = CreateCreditCardSchema.parse(req.body)
  const result = await cardService.createCreditCard(userId, parsedData)
  return res.status(result.statusCode).json(result)
})

export const getMyDebitCards: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.userId!
    const result = await cardService.getMyDebitCards(userId)
    return res.status(result.statusCode).json(result)
  }
)

export const getMyCreditCards: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.userId!
    const result = await cardService.getMyCreditCards(userId)
    return res.status(result.statusCode).json(result)
  }
)

export const getDebitCardById: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.userId!
    const cardId = req.params.cardId!
    const result = await cardService.getDebitCardById(userId, cardId)
    return res.status(result.statusCode).json(result)
  }
)

export const getCreditCardById: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.userId!
    const cardId = req.params.cardId!
    const result = await cardService.getCreditCardById(userId, cardId)
    return res.status(result.statusCode).json(result)
  }
)
