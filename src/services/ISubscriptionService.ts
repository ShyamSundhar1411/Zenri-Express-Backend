import { ServiceResult } from "../domain/interfaces";
import { Subscription, Subscriptions } from "../domain/subscriptionSchema";

export interface ISubscriptionService{
    getMySubscriptions(userId: string): Promise<ServiceResult<Subscriptions>>
    getSubscriptionById(userId: string, subscriptionId: string): Promise<ServiceResult<Subscription>>
}