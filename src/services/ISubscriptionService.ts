import { ServiceResult } from "../domain/interfaces";
import { SubscriptionCreateRequest, Subscription, Subscriptions } from "../domain/subscription";

export interface ISubscriptionService{
    getMySubscriptions(userId: string): Promise<ServiceResult<Subscriptions>>
    getSubscriptionById(userId: string, subscriptionId: string): Promise<ServiceResult<Subscription>>
    createSubscription(userId: string, subscriptionData: SubscriptionCreateRequest): Promise<ServiceResult<Subscription>>
}