import prismaClient from "../../config/prismaClient";
import { Card, CardSchema } from "../../domain/cardSchema";
import { ServiceResult } from "../../domain/interfaces";
import { ICardService } from "../ICardService";

export class CardService implements ICardService {
    async getMyCards(userId: string): Promise<ServiceResult<Card>> {
        try {
            const creditCards = await prismaClient.creditCard.findMany({
                where: {
                    userId: userId
                }
            })
            const debitCards = await prismaClient.debitCard.findMany({
                where: {
                    bankAccount: {
                        userId: userId
                    }
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

}