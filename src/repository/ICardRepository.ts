
import { CreateCreditCard, CreateDebitCard } from "../domain/card";
import { RepoResult } from "../domain/interfaces";
import { CardNetwork, CreditCard, DebitCard, Prisma } from "../generated";

export interface Card {
    debitCards: DebitCard[]
    creditCards: CreditCard[]
}
export interface CardFilters{
    debitCardFilter: Prisma.DebitCardInclude | null
    creditCardFilter: Prisma.CreditCardInclude | null
}
export interface ICardRepository{
    createDebitCard(userId:string,data: CreateDebitCard, include: CardFilters): Promise<RepoResult<DebitCard>>
    createCreditCard(userId:string, data: CreateCreditCard, include: CardFilters): Promise<RepoResult<CreditCard>>
    getMyCards(userId: string, cardFilters: CardFilters): Promise<RepoResult<Card>>
    getMyDebitCards(userId: string,cardFilters: CardFilters): Promise<RepoResult<DebitCard[]>>
    getMyCreditCards(userId: string,cardFilters: CardFilters): Promise<RepoResult<CreditCard[]>>
    getDebitCardById(userId: string, cardId: string,cardFilters: CardFilters): Promise<RepoResult<DebitCard>>
    getCreditCardById(userId: string, cardId: string,cardFilters: CardFilters): Promise<RepoResult<CreditCard>>
    getAllCardNetworks(): Promise<RepoResult<CardNetwork[]>>
}