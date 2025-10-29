import prismaClient from "../../config/prismaClient";
import { ServiceResult } from "../../domain/interfaces";
import { Subscriptions, Subscription, SubscriptionSchema } from "../../domain/subscriptionSchema";
import { ISubscriptionService } from "../ISubscriptionService";

export class SubscriptionService implements ISubscriptionService{
    async getMySubscriptions(userId: string): Promise<ServiceResult<Subscriptions>> {
        try{
            const subscriptions = await prismaClient.subscription.findMany({
                where:{
                   userId:userId
                }
            })
            return {
                data: subscriptions.map((subscription) => {
                    return SubscriptionSchema.parse(
                        subscription
                    )
                }),
                statusCode: 200
            }
        }catch(err:any){
            return {
                error: err,
                statusCode: 400
            }
        }
    }
    async getSubscriptionById(userId: string, subscriptionId: string): Promise<ServiceResult<Subscription>> {
        try{
            const subscription = await prismaClient.subscription.findUnique({
                where:{
                    id: subscriptionId,
                    userId: userId
                }
            })
            if(!subscription){
                return {
                    error:"Subscription Not Found",
                    statusCode: 404,
                }
            }
            return {
                data: SubscriptionSchema.parse(subscription),
                statusCode: 200
            }
        }catch(err:any){
            return {
                error: err,
                statusCode: 400
            }
        }
    }
    
}