import prismaClient from "../../config/prismaClient"
import {
  Card,
  CardNetworks,
  CardNetworksSchema,
  CardSchema,
  CreateCreditCard,
  CreateDebitCard,
  CreditCard,
  CreditCardSchema,
  CreditCardsSchema,
  DebitCards,
  DebitCardSchema,
  DebitCardsSchema
} from "../../domain/card"
import { RepoError, ServiceResult } from "../../domain/interfaces"
import { DebitCard } from "../../generated"
import { CardRepository } from "../../repository/impl/CardRepository"
import { ICardService } from "../ICardService"

export class CardService implements ICardService {
  private cardRepository = new CardRepository()
  async createDebitCard(
    userId: string,
    data: CreateDebitCard
  ): Promise<ServiceResult<DebitCard>> {
    const repoResult = await this.cardRepository.createDebitCard(
      userId,
      data,
      {
        debitCardFilter: {

          cardNetwork: true


        },
        creditCardFilter: null
      }
    )
    if (repoResult.error) {
      return {
        error: repoResult.error,
        statusCode: 400
      }

    }
    return {
      data: DebitCardSchema.parse(repoResult.data),
      statusCode: 201

    }

  }
  async createCreditCard(
    userId: string,
    data: CreateCreditCard
  ): Promise<ServiceResult<CreditCard>> {
    const repoResult = await this.cardRepository.createCreditCard(
      userId,
      data,
      {
        debitCardFilter: null,
        creditCardFilter: {
          cardNetwork: true
        }
      }
    )
    if (repoResult.error) {
      return {
        error: repoResult.error,
        statusCode: 400
      }
    }
    return {
      data: CreditCardSchema.parse(repoResult.data),
      statusCode: 201
    }
  }

  async getMyCards(userId: string): Promise<ServiceResult<Card>> {
    const repoResult = await this.cardRepository.getMyCards(
      userId,
      {
        debitCardFilter: {
          cardNetwork: true
        },
        creditCardFilter: {
          cardNetwork: true
        }
      }
    )
    if (repoResult.error) {
      return {
        error: repoResult.error,
        statusCode: 400
      }
    }
    return {
      data: CardSchema.parse(repoResult.data),
      statusCode: 200
    }
  }
  async getMyDebitCards(userId: string): Promise<ServiceResult<DebitCards>> {
    const repoResult = await this.cardRepository.getMyDebitCards(
      userId,
      {
        debitCardFilter: {
          cardNetwork: true
        },
        creditCardFilter: null
      }
    )
    if (repoResult.error) {
      return {
        error: repoResult.error,
        statusCode: 400
      }
    }
    return {
      data: DebitCardsSchema.parse(repoResult.data),
      statusCode: 200
    }
  }
  async getMyCreditCards(userId: string): Promise<ServiceResult<CreditCard[]>> {
    const repoResult = await this.cardRepository.getMyCreditCards(
      userId,
      {
        debitCardFilter: null,
        creditCardFilter: {
          cardNetwork: true
        }
      }
    )
    if (repoResult.error) {
      return {
        error: repoResult.error,
        statusCode: 400
      }
    }
    return {
      data: CreditCardsSchema.parse(repoResult.data),
      statusCode: 200
    }
  }
  async getDebitCardById(
    userId: string,
    cardId: string
  ): Promise<ServiceResult<DebitCard>> {
    const repoResult = await this.cardRepository.getDebitCardById(
      userId,
      cardId,
      {
        debitCardFilter: {
          cardNetwork: true
        },
        creditCardFilter: null
      }
    )
    if (repoResult.error) {
      if (repoResult.errorType === RepoError.NOT_FOUND) {
        return {
          error: repoResult.error,
          statusCode: 404
        }
      }
      return {
        error: repoResult.error,
        statusCode: 400
      }
    }
    return {
      data: DebitCardSchema.parse(repoResult.data),
      statusCode: 200
    }

  }
  async getCreditCardById(
    userId: string,
    cardId: string
  ): Promise<ServiceResult<CreditCard>> {
    const repoResult = await this.cardRepository.getCreditCardById(
      userId,
      cardId,
      {
        debitCardFilter: null,
        creditCardFilter: {
          cardNetwork: true
        }
      }
    )
    if (repoResult.error) {
      if (repoResult.errorType === RepoError.NOT_FOUND) {
        return {
          error: repoResult.error,
          statusCode: 404
        }
      }
      return {
        error: repoResult.error,
        statusCode: 400
      }
    }
    return {
      data: CreditCardSchema.parse(repoResult.data),
      statusCode: 200
    
    }
  }
  async getAllCardNetworks(): Promise<ServiceResult<CardNetworks>> {
    const repoResult = await this.cardRepository.getAllCardNetworks()
    if (repoResult.error) {
      return {
        error: repoResult.error,
        statusCode: 400
      }
    }
    return {
      data: CardNetworksSchema.parse(repoResult.data),
      statusCode: 200
    }
  }
}
