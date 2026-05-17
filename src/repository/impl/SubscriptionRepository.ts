import prismaClient from "../../config/prismaClient";
import { RepoError, RepoResult } from "../../domain/interfaces";
import { Subscription } from "../../domain/subscription";
import { ISubscriptionRepository } from "../ISubscriptionRepository";

export class SubscriptionRepository implements ISubscriptionRepository{
    private db  = prismaClient
    async getSubscriptionById(subscriptionId: string, userId: string): Promise<RepoResult<Subscription>> {
        try{
            const subscription = await this.db.subscription.findUnique({
                where:{
                    id: subscriptionId,
                    userId: userId
                },
                include:{
                    category:true
                }
            })
            if(!subscription){
                return {
                    error:"Subscription not found",
                    errorType: RepoError.NOT_FOUND
                }
            }
            return {
                data: subscription
            }
        }catch(error:any){
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }
    async getSubscriptionByName(name: string, userId: string): Promise<RepoResult<Subscription>> {
        try{
            const subscription = await this.db.subscription.findFirst({
                where:{
                    subscriptionName: name,
                    userId: userId
                },
                include:{
                    category:true
                }
            })
            if(!subscription){
                return {
                    error:"Subscription not found",
                    errorType: RepoError.NOT_FOUND
                }
            }
            return {
                data: subscription
            }
        }catch(error:any){
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }
    
}