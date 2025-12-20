import prismaClient from "../../config/prismaClient";
import { CreateDebitCard, CreateCreditCard } from "../../domain/card";
import { RepoError, RepoResult } from "../../domain/interfaces";
import { DebitCard, CreditCard, CardNetwork } from "../../generated";
import { Card, CardFilters, ICardRepository } from "../ICardRepository";

export class CardRepository implements ICardRepository {

    private db = prismaClient
    async createDebitCard(userId: string, data: CreateDebitCard, cardFilters: CardFilters): Promise<RepoResult<DebitCard>> {
        try {
            const cardNetwork = await this.db.cardNetwork.findFirst({
                where: {
                    networkName: data.cardNetwork
                }
            })
            if (!cardNetwork) {
                return {
                    error: "Card network not found",
                    errorType: RepoError.NOT_FOUND
                }
            }
            const bankAccount = await this.db.bankAccount.findFirst({
                where: {
                    userId: userId,
                    accountNumber: data.bankAccount
                }
            })
            if (!bankAccount) {
                return {
                    error: "Bank account not found",
                    errorType: RepoError.NOT_FOUND
                }
            }
            const debitCard = await this.db.debitCard.create({
                data: {
                    cardNumber: data.cardNumber,
                    cardNetworkId: cardNetwork.id,
                    cardHolderName: data.cardHolderName,
                    bankAccountId: bankAccount.id,
                    expiresAt: data.expiresAt
                },
                include: cardFilters.debitCardFilter
            })
            return {
                data: debitCard,

            }
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }
    async createCreditCard(userId: string, data: CreateCreditCard, cardFilters: CardFilters): Promise<RepoResult<CreditCard>> {
        try {
            const cardNetwork = await this.db.cardNetwork.findFirst({
                where: {
                    networkName: data.cardNetwork
                }
            })
            if (!cardNetwork) {
                return {
                    error: "Card network not found",
                    errorType: RepoError.NOT_FOUND
                }
            }
            const creditCard = await this.db.creditCard.create({
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
                include: cardFilters.creditCardFilter
            })
            return {
                data: creditCard
            }
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }
    async getMyCards(userId: string, cardFilters: CardFilters): Promise<RepoResult<Card>> {
        try {
            const creditCards = await this.db.creditCard.findMany({
                where: {
                    userId: userId
                },
                include: cardFilters.creditCardFilter
            })
            const debitCards = await this.db.debitCard.findMany({
                where: {
                    bankAccount: {
                        userId: userId
                    }
                },
                include: cardFilters.debitCardFilter
            })
            return {
                data: {
                    creditCards: creditCards,
                    debitCards: debitCards
                }
            }
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }
    async getMyDebitCards(userId: string, cardFilters: CardFilters): Promise<RepoResult<DebitCard[]>> {
        try {
            const debitCards = await this.db.debitCard.findMany({
                where: {
                    bankAccount: {
                        userId: userId
                    }
                },
                include: cardFilters.debitCardFilter
            })
            return {
                data: debitCards
            }
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }
    async getMyCreditCards(userId: string, cardFilters: CardFilters): Promise<RepoResult<CreditCard[]>> {
        try {
            const creditCards = await this.db.creditCard.findMany({
                where: {
                    userId: userId
                },
                include: cardFilters.creditCardFilter
            })
            return {
                data: creditCards
            }
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }
    async getDebitCardById(userId: string, cardId: string, cardFilters: CardFilters): Promise<RepoResult<DebitCard>> {
        try {
            const debitCard = await this.db.debitCard.findFirst({
                where: {
                    id: cardId,
                    bankAccount: {
                        userId: userId
                    }
                },
                include: cardFilters.debitCardFilter
            })
            if (!debitCard) {
                return {
                    error: "Debit card not found",
                    errorType: RepoError.NOT_FOUND
                }
            }
            return {
                data: debitCard
            }
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }
    async getCreditCardById(userId: string, cardId: string, cardFilters: CardFilters): Promise<RepoResult<CreditCard>> {
        try {
            const creditCard = await this.db.creditCard.findFirst({
                where: {
                    id: cardId,
                    userId: userId
                },
                include: cardFilters.creditCardFilter
            })
            if (!creditCard) {
                return {
                    error: "Credit Card not Found",
                    errorType: RepoError.NOT_FOUND
                }
            }
            return {
                data: creditCard
            }
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }
    async getAllCardNetworks(): Promise<RepoResult<CardNetwork[]>> {
        try {
            const cardNetworks  = await this.db.cardNetwork.findMany()
            return {
                data: cardNetworks
            }
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }

}