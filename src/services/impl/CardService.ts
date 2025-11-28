import prismaClient from "../../config/prismaClient"
import {
  Card,
  CardNetworks,
  CardSchema,
  CreateCreditCard,
  CreateDebitCard,
  CreditCard,
  CreditCardSchema,
  DebitCards,
  DebitCardSchema
} from "../../domain/card"
import { ServiceResult } from "../../domain/interfaces"
import { DebitCard } from "../../generated"
import { ICardService } from "../ICardService"

export class CardService implements ICardService {
  async createDebitCard(
    userId: string,
    data: CreateDebitCard
  ): Promise<ServiceResult<DebitCard>> {
    try {
      const cardNetwork = await prismaClient.cardNetwork.findFirst({
        where: { networkName: data.cardNetwork }
      })
      if (!cardNetwork) {
        return {
          error: "Card network not found",
          statusCode: 400
        }
      }
      const bankAccount = await prismaClient.bankAccount.findFirst({
        where: {
          userId: userId,
          accountNumber: data.bankAccount
        }
      })
      if (!bankAccount) {
        return {
          error: "Bank account not found",
          statusCode: 400
        }
      }
      const card = await prismaClient.debitCard.create({
        data: {
          cardNumber: data.cardNumber,
          cardHolderName: data.cardHolderName,
          cardNetworkId: cardNetwork.id,
          bankAccountId: bankAccount.id,
          expiresAt: data.expiresAt
        },
        include: {
          cardNetwork: true
        }
      })
      return {
        data: DebitCardSchema.parse(card),
        statusCode: 201
      }
    } catch (error: any) {
      if (error.code === "P2002") {
        return {
          error: "Debit Card already exists",
          statusCode: 400
        }
      }
      return {
        error: error.message || "Internal error",
        statusCode: 500
      }
    }
  }
  async createCreditCard(
    userId: string,
    data: CreateCreditCard
  ): Promise<ServiceResult<CreditCard>> {
    try {
      const cardNetwork = await prismaClient.cardNetwork.findFirst({
        where: {
          networkName: data.cardNetwork
        }
      })
      if (!cardNetwork) {
        return {
          error: "Card network not found",
          statusCode: 400
        }
      }
      const card = await prismaClient.creditCard.create({
        data: {
          cardNumber: data.cardNumber,
          cardNetworkId: cardNetwork.id,
          cardHolderName: data.cardHolderName,
          issuer: data.issuer,
          balance: data.balance,
          limit: data.limit,
          expiresAt: data.expiresAt,
          userId: userId
        },
        include: {
          cardNetwork: true
        }
      })
      return {
        data: CreditCardSchema.parse(card),
        statusCode: 201
      }
    } catch (error: any) {
      if (error.code === "P2002") {
        return {
          error: "Credit Card already exists",
          statusCode: 400
        }
      }
      return {
        error: error.message || "Internal error",
        statusCode: 500
      }
    }
  }

  async getMyCards(userId: string): Promise<ServiceResult<Card>> {
    try {
      const creditCards = await prismaClient.creditCard.findMany({
        where: {
          userId: userId
        },
        include: {
          cardNetwork: true
        }
      })
      const debitCards = await prismaClient.debitCard.findMany({
        where: {
          bankAccount: {
            userId: userId
          },

        },
        include: {
          cardNetwork: true
        }
      })
      return {
        data: CardSchema.parse({
          creditCards: creditCards,
          debitCards: debitCards
        }),
        statusCode: 200
      }
    } catch (error: any) {
      return {
        error: error,
        statusCode: 400
      }
    }
  }
  async getMyDebitCards(userId: string): Promise<ServiceResult<DebitCards>> {
    try {
      const debitCards = await prismaClient.debitCard.findMany({
        where: {
          bankAccount: {
            userId: userId
          }
        },
        include: {
          cardNetwork: true
        }
      })
      if (debitCards.length == 0) {
        return {
          error: "No debit cards found",
          statusCode: 200
        }
      }
      return {
        data: debitCards.map((debitCard) => DebitCardSchema.parse(debitCard)),
        statusCode: 200
      }
    } catch (error: any) {
      return {
        error: error,
        statusCode: 400
      }
    }
  }
  async getMyCreditCards(userId: string): Promise<ServiceResult<CreditCard[]>> {
    try {
      const creditCards = await prismaClient.creditCard.findMany({
        where: {
          userId: userId
        },
        include: {
          cardNetwork: true
        }
      })
      if (creditCards.length == 0) {
        return {
          error: "No credit cards found",
          statusCode: 200
        }
      }
      return {
        data: creditCards.map((creditCard) =>
          CreditCardSchema.parse(creditCard)
        ),
        statusCode: 200
      }
    } catch (error: any) {
      return {
        error: error,
        statusCode: 400
      }
    }
  }
  async getDebitCardById(
    userId: string,
    cardId: string
  ): Promise<ServiceResult<DebitCard>> {
    try {
      const debitCard = await prismaClient.debitCard.findFirst({
        where: {
          id: cardId,
          bankAccount: {
            userId: userId
          }
        },
        include:{
          cardNetwork: true
        }
      })
      if (!debitCard) {
        return {
          error: "Debit card not found",
          statusCode: 404
        }
      }
      return {
        data: DebitCardSchema.parse(debitCard),
        statusCode: 200
      }
    } catch (error: any) {
      return {
        error: error,
        statusCode: 400
      }
    }
  }
  async getCreditCardById(
    userId: string,
    cardId: string
  ): Promise<ServiceResult<CreditCard>> {
    try {
      const creditCard = await prismaClient.creditCard.findFirst({
        where: {
          id: cardId,
          userId: userId
        },
        include:{
          cardNetwork: true
        }
      })
      if (!creditCard) {
        return {
          error: "Credit card not found",
          statusCode: 404
        }
      }
      return {
        data: CreditCardSchema.parse(creditCard),
        statusCode: 200
      }
    } catch (error: any) {
      return {
        error: error,
        statusCode: 400
      }
    }
  }
  async getAllCardNetworks(): Promise<ServiceResult<CardNetworks>> {
    try {
      const cardNetworks = await prismaClient.cardNetwork.findMany()
      return {
        data: cardNetworks,
        statusCode: 200
      }
    } catch (error: any) {
      return {
        error: error,
        statusCode: 400
      }
    }
  }
}
