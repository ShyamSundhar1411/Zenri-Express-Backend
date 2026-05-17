import { RepoResult } from "../domain/interfaces";
import { Subscription } from "../domain/subscription";

export interface ISubscriptionRepository{
    getSubscriptionById(subscriptionId: string,userId: string): Promise<RepoResult<Subscription>>
    getSubscriptionByName(name: string, userId: string): Promise<RepoResult<Subscription>>
}