import { Card } from "../domain/cardSchema";
import { ServiceResult } from "../domain/interfaces";

export interface ICardService{
    getMyCards(userId: string): Promise<ServiceResult<Card>>
}