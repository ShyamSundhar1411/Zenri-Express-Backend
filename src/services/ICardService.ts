import {
  Card,
  CardNetworks,
  CreateCreditCard,
  CreateDebitCard,
  CreditCard,
  DebitCards
} from "../domain/card"
import { ServiceResult } from "../domain/interfaces"
import { DebitCard } from "../generated"

export interface ICardService {
  createDebitCard(
    userId: string,
    data: CreateDebitCard
  ): Promise<ServiceResult<DebitCard>>
  createCreditCard(
    userId: string,
    data: CreateCreditCard
  ): Promise<ServiceResult<CreditCard>>
  getMyCards(userId: string): Promise<ServiceResult<Card>>
  getMyDebitCards(userId: string): Promise<ServiceResult<DebitCards>>
  getMyCreditCards(userId: string): Promise<ServiceResult<CreditCard[]>>
  getDebitCardById(
    userId: string,
    cardId: string
  ): Promise<ServiceResult<DebitCard>>
  getCreditCardById(
    userId: string,
    cardId: string
  ): Promise<ServiceResult<CreditCard>>
  getAllCardNetworks(): Promise<ServiceResult<CardNetworks>>
}
